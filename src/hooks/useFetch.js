/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useFetch = (url, option) => {
  const [status, $status] = useState({
    loading: false,
    data: null,
    error: null,
  });

  const fetchData = (url, option) => {
    $status({ loading: true });

    fetch(url, option)
      .then((res) => res.json())
      .then((res) => {
        $status({ loading: false, data: res.data });
      })
      .catch((error) => {
        $status({ loading: false, error });
      });
  };

  useEffect(() => {
    if (url) fetchData(url, option);
  }, []);

  return { ...status, fetchData };
};

export default useFetch;
