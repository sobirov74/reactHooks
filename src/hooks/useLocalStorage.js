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

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, $value];
};

export default useLocalStorage;
