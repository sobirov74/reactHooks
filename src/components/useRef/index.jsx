import React, { useRef } from "react";

const UseRefHook = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <>
      {/* <h1>{handleClick()}</h1> */}

      <input type="text" ref={ref} />

      <button onClick={() => handleClick()}>Change Name</button>
    </>
  );
};

export default UseRefHook;
