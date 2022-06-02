import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

// type Post = {
//   userId: number,
//   id: number,
//   title: string,
// };
const checkItem = (checker = []) => (checker ? checker : []);

const useBasket = () => {
  const [value, setValue, reset] = useLocalStorage("basket", []);

  const addItem = (newItem) => {
    let actualIdx = -1;
    checkItem(value).find((item, i) => {
      if (item.id === newItem.id) {
        actualIdx = i;
        return true;
      }
      return false;
    });

    if (actualIdx === -1) {
      setValue([...checkItem(value), { newItem, id: newItem.id, count: 1 }]);
    } else {
      const count = actualIdx.count + 1;
      const item = [...checkItem(value)];
      item[actualIdx].count = count;
      setValue(item);
    }
  };

  const removeItem = (id) => {
    setValue(checkItem(value).filter((del) => del.id !== id));
  };

  const increment = (id) => {
    const item = [...checkItem(value)];
    const smth = item.find((a) => a.id === id);
    const index = item.indexOf(smth);
    item[index].count += 1;
    setValue(item);
  };

  const decrement = (id) => {
    const item = [...checkItem(value)];
    const smth = item.find((a) => a.id === id);
    const index = item.indexOf(smth);
    item[index].count -= 1;
    setValue(item);
  };

  const clear = () => {
    reset();
  };

  return { addItem, clear, value, removeItem, increment, decrement };
};

export default useBasket;
