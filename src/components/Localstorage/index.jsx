import React, { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const UseLocalStorage = () => {
  const [name, $name, reset] = useLocalStorage("name", "");
  const [value, $value] = useState("");

  const getName = (e) => {
    $value(e);
  };

  useEffect(() => {
    if (localStorage.getItem("name"))
      $value(JSON.parse(localStorage.getItem("name")));
  }, []);

  const toLocalStorage = (e) => {
    e.preventDefault();
    $name(value);
  };

  const resetBtn = (e) => {
    reset(e);
    $value("");
    $name("");
  };

  return (
    <form className="container">
      <input
        type="text"
        value={value}
        onChange={(e) => getName(e.target.value)}
      />
      <button onClick={(e) => toLocalStorage(e)}>submit</button>
      <button onClick={(e) => resetBtn(e)}>reset</button>
    </form>
  );
};

export default UseLocalStorage;
