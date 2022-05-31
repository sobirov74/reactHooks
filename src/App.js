import "./App.css";
import React, { createContext } from "react";
import MainPage from "./pages/mainpage";

export const AppContext = createContext(null);
const App = () => {
  return <MainPage />;
};

export default App;
