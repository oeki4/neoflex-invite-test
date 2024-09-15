import { createContext, useContext } from "react";
import BasketStore from "./basket.ts";

const store = {
  basketStore: new BasketStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;
