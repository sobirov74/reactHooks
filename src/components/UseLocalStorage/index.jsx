import React, { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const UseLocalStorage = () => {
  const [name, $name, reset] = useLocalStorage("name", "");
  const [value, $value] = useState("");

  const getName = (e) => {
    // e.preventDefault();
    $value(e);
  };

  const toLocalStorage = (e) => {
    e.preventDefault();
    $name(value);
  };
  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={(e) => getName(e.target.value)}
      />
      <button onClick={(e) => toLocalStorage(e)}>submit</button>
      <button onClick={(e) => reset(e)}>reset</button>
    </form>
  );
};

export default UseLocalStorage;
