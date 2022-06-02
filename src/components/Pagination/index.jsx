/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { getUrl } from "../../api/getUrl";
import useApiPaginate from "../../hooks/useApiPaginate";
import { AppContext, limit } from "../../pages/mainpage";

const UseApiPaginate = () => {
  const { items, $items } = useContext(AppContext);
  const { data, error, loading, refetch } = useApiPaginate({
    api: getUrl,
    limit,
  });

  useEffect(() => {
    if (data?.length) {
      // $items((items) => [...items, ...data]);
      $items([...items, ...data]);
    }
  }, [data]);

  const addBtn = () => {
    refetch();
  };
  if (loading) return <div>loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="container">
      {items && <button onClick={addBtn}>more</button>}
    </div>
  );
};

export default UseApiPaginate;
