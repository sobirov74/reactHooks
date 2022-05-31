import React from "react";
import useInput from "../../hooks/useInput";

const UseInput = () => {
  const state = useInput("useInput", true);

  return (
    <form>
      <input type="text" {...state} />
      {state.error && <span>{state.error}</span>}
    </form>
  );
};

export default UseInput;
