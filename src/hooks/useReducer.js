import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "SHOW_TEXT":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 1, showText: true });
  return (
    <div>
      <h1>{state.count}</h1>

      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "SHOW_TEXT" });
        }}
      >
        increace
      </button>

      {state.showText && <h2>Its odd number</h2>}
    </div>
  );
};

export default UseReducerHook;
