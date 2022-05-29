import "./App.css";
import React, { createContext } from "react";
import UseLocalStorage from "./components/UseLocalStorage";
import UseApi from "./components/useApi";

export const AppContext = createContext(null)
const App = () => {

  return (
    <div className="container">
      <UseLocalStorage />
      <UseApi />
    </div>
  );
};

export default App;
