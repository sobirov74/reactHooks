/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";

const getInitialValue = (key, initialValue) => {
  const savedValue = localStorage.getItem(key);
  if (savedValue) return JSON.parse(savedValue);
  return initialValue;
};

const useLocalStorage = (key, initialValue) => {
  const [value, $value] = useState(() => getInitialValue(key, initialValue));

  const setValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    $value(newValue);
  };

  const reset = () => {
    $value(initialValue);
    localStorage.removeItem(key);
  };

  return [value, setValue, reset];
};

export default useLocalStorage;
