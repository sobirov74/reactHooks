/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";

const useApi = ({ api, body, limit }) => {
  const [data, $data] = useState(null);
  const [error, $error] = useState(null);
  const [loading, $loading] = useState(false);
  const [fetcher, $fetcher] = useState(0);

  const refetch = () => {
    $fetcher(fetcher + 1);
  };

  useEffect(() => {
    if (fetcher > 0) {
      const ourRequest = axios.CancelToken.source();
      const fetchData = async () => {
        $loading(true);
        api({ ...body, cancelToken: ourRequest.token, limit })
          .then(({ data: response }) => {
            if (response) {
              $data(response);
              if (error) {
                $error(null);
              }
            }
          })
          .catch((error) => {
            $error(error?.message);
          })
          .finally(() => {
            $loading(false);
          });
      };

      fetchData();
      return () => {
        ourRequest.cancel();
      };
    }
  }, [fetcher]);

  return { data, error, loading, limit, refetch };
};

export default useApi;
