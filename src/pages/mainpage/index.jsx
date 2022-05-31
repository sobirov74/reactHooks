import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getUrl } from "../../api/getUrl";
import UseApi from "../../components/GetPosts";
import UseApiPaginate from "../../components/Pagination";
import UseLocalStorage from "../../components/Localstorage";
import useApi from "../../hooks/useApi";

// const pageSize = 100;
const limit = 4;

export const AppContext = createContext(null);

const MainPage = () => {
  const {
    data = [],
    loading,
    error,
    refetch,
  } = useApi({ api: getUrl, body: {} });
  const [items, $items] = useState([]);
  // const [lists, $lists] = useState([]);

  useEffect(() => {
    $items(data);
  }, [data]);

  const reload = (e) => {
    e.preventDefault();
    refetch();
  };
  return (
    <div>
      <UseLocalStorage />
      <AppContext.Provider
        value={{ loading, error, $items, items, reload, limit }}
      >
        <UseApi />
        <UseApiPaginate />
      </AppContext.Provider>
    </div>
  );
};

export default MainPage;
