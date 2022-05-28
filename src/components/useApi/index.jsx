import React, { useContext } from "react";
import { AppContext } from "./../../App";

const UseApi = () => {
  const { data, loading, items } = useContext(AppContext);

  const toggler = () => {
    if (!items.length) {
      return data?.slice(0, 10);
    } else {
      return items;
    }
  };

  if (loading) return <div>loading...</div>;
  return (
    <div>
      {toggler()?.map((data) => (
        <p key={data.id}>{data.title}</p>
      ))}
    </div>
  );
};

export default UseApi;
