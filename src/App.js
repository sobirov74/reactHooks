import "./App.css";
import React, { createContext, useState } from "react";
import UseLocalStorage from "./components/UseLocalStorage";
import UseApi from "./components/useApi";
import UsePaginate from "./components/UsePaginate";
import useApi from './hooks/useApi';

export const AppContext = createContext(null)
const App = () => {
  const { data, loading, error } = useApi(
    "https://jsonplaceholder.typicode.com/posts?_limit=32"
  );

  const [items, $items] = useState([])

  function paginate(array, pageSize, page_number) {
    return array.slice((page_number - 1) * pageSize, page_number * pageSize);
  }

  return (
    <div className="container">
      <UseLocalStorage />

      <AppContext.Provider value={{ data, loading, error, items, $items, paginate }}>
        <UseApi />
        <UsePaginate />
      </AppContext.Provider>
      //anotherbranch
      {/* <UseInput />
      <UseReducerHook />
      <h3>useRef</h3>
      <UseRefHook />
      <UseFetch /> */}
    </div>
  );
};

export default App;
