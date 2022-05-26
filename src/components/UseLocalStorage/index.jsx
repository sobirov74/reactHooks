import React, { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const UseLocalStorage = () => {
  const [name, $name] = useLocalStorage("name", "");

  const getName = (e) => {
    $name(e);
  };
  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => getName(e.target.value)}
      />
    </form>
  );
};

export default UseLocalStorage;
