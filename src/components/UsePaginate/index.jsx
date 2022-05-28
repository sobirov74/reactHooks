import React, { useContext } from "react";
import { AppContext } from "./../../App";

const UsePaginate = () => {
  const { data, paginate, $items } = useContext(AppContext);
  const pageSize = 10;
  const pages = [];

  const pagesCount = () => {
    const num = data?.length / pageSize;
    return Math.ceil(num);
  };

  for (let i = 1; i <= pagesCount(); i++) {
    pages.push(i);
  }

  const handlePageNumber = (page) => {
    const a = paginate(data, pageSize, page);
    $items(a);
  };

  return (
    <ul className='paginationBox'>
      {pages.map((page, i) => {
        return (
          <li key={i}>
            <span onClick={() => handlePageNumber(page)}>{page}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default UsePaginate;
