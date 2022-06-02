/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";

const useApiPaginate = ({ api, body = {}, limit }) => {
  const [data, $data] = useState([]);
  const [error, $error] = useState(null);
  const [loading, $loading] = useState(false);
  const [page, $page] = useState(1);

  const refetch = () => {
    $page(page + 1);
  };

  useEffect(() => {
    if (page > 1) {
      const ourRequest = axios.CancelToken.source();
      const fetchData = async () => {
        $loading(true);
        api({
          ...body,
          cancelToken: ourRequest.token,
          page,
          limit,
        })
          .then(({ data: response }) => {
            if (response) {
              // if (page > 1) {
              //   $data([...data, ...response]);
              // } else $data(response);
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
  }, [page]);

  return { data, error, loading, refetch, page, limit, $data };
};

export default useApiPaginate;
