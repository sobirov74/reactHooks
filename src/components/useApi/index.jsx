import React from "react";
import useApi from "./../../hooks/useApi";
import usePaginate from "./../../hooks/usePaginate";

const UseApi = () => {
  const pageSize = 10;
  const { data, loading, error } = useApi(
    "https://jsonplaceholder.typicode.com/posts?_limit=32"
  );
  const { items, pages, handlePageNumber } = usePaginate(data, pageSize);

  const toggler = () => {
    if (!items.length) {
      return data?.slice(0, 10);
    } else {
      return items;
    }
  };

  if (loading) return <div>loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div>
      {toggler()?.map((data) => (
        <p key={data.id}>{data.title}</p>
      ))}

      <ul className='paginationBox'>
        {pages.map((page, i) => {
          return (
            <li key={i}>
              <span onClick={() => handlePageNumber(page)}>{page}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseApi;
