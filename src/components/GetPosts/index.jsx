import React, { useContext } from "react";
import { AppContext } from "../../pages/mainpage";

const UseApi = () => {
  const { loading, error, items, reload } = useContext(AppContext);
  console.log(items);
  return (
    <div>
      <button onClick={(a) => reload(a)}>download posts</button>
      {loading && <div>loading...</div>}
      {error && <div>{error}</div>}
      {items && items.map((data) => <p key={data.id}>{data.title}</p>)}
      {/* {items?.length > 0 && <button onClick={(e) => add()}>more</button>} */}
    </div>
  );
};

export default UseApi;
