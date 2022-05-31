import { useLocalStorage } from "./storageHook";

const useBasket = () => {
  const [item, $item, reset] = useLocalStorage();

  const addItem = (index: number) => {};
};

export default useBasket;
