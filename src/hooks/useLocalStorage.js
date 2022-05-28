import { useEffect, useState } from "react";

const getInitialValue = (key, initialValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  return initialValue;
};

const useLocalStorage = (key, initialValue) => {
  const [value, $value] = useState(() => {
    return getInitialValue(key, initialValue);
  });

  const reset = (e) => {
    e.preventDefault();
    $value("");
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, $value, reset];
};

export default useLocalStorage;
