/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { getUrl } from "../../api/getUrl";
import useApiPaginate from "../../hooks/useApiPaginate";
import { AppContext } from "../../pages/mainpage";

const UseApiPaginate = () => {
  //   const parameters = {
  //     page: 2,
  //     limit: 4,
  //   };
  const { items, $items, add, limit, currPage } = useContext(AppContext);
  const { data, error, loading, refetch } = useApiPaginate({
    api: getUrl,
  });
  // const nextPage = items.push(...data);
  console.log(data);
  if (data?.length) {
    data?.forEach((a) => items.push(a));
  }

  // console.log(items?.push(...data));

  useEffect(() => {
    $items(data);
  }, [data]);

  const addBtn = () => {
    refetch();
    $items(data);
  };
  return <button onClick={addBtn}>more</button>;
};

export default UseApiPaginate;
