import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getUrl } from "../../api/getUrl";
import UseApi from "../../components/GetPosts";
import UseApiPaginate from "../../components/Pagination";
import UseLocalStorage from "../../components/Localstorage";
import useApi from "../../hooks/useApi";

export const limit = 6;

export const AppContext = createContext(null);

const MainPage = () => {
  const {
    data = [],
    loading,
    error,
    refetch,
  } = useApi({ api: getUrl, body: {}, limit });
  const [items, $items] = useState(data);

  useEffect(() => {
    $items(data);
  }, [data]);

  const reload = (e) => {
    refetch();
  };
  return (
    <div>
      <UseLocalStorage />
      <AppContext.Provider value={{ loading, error, $items, items, reload }}>
        <UseApi />
        <UseApiPaginate />
      </AppContext.Provider>
    </div>
  );
};

export default MainPage;
