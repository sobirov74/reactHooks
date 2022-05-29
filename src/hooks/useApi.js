/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";

const useApi = (url) => {

  const [data, $data] = useState(null);
  const [error, $error] = useState(null);
  const [loading, $loading] = useState(true);

  const getData = (url) => {

    axios({ url })
      .then((res) => {
        $loading(false);
        $data(res.data);
      })
      .catch((e) => {
        $loading(false);
        $error(e);
      });
  };

  useEffect(() => {
    getData(url);
  }, []);

  return { data, error, loading };
};

export default useApi;
