import "./App.css";
import React from "react";
import UseLocalStorage from "./components/UseLocalStorage";
import UseFetch from "./components/UseFetch";
import UseInput from "./components/UseInput";
import UseReducerHook from "./hooks/useReducer";
import UseRefHook from "./components/useRef";

const App = () => {
  return (
    <div className="container">
      <UseLocalStorage />
      <UseInput />
      <UseReducerHook />
      <h3>useRef</h3>
      <UseRefHook />
      <UseFetch />
    </div>
  );
};

export default App;
