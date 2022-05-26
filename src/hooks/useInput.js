import { useState } from "react";

const useInput = (initialValue, required) => {
  const [value, $value] = useState(initialValue);
  const [error, $error] = useState(null);

  return {
    value,
    error,
    onChange: (e) => $value(e.target.value),
    onBlur: (e) => {
      if (!e.target.value && required) $error("Required");
      else $error(null);
    },
  };
};

export default useInput;
