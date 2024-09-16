import { createContext, useContext } from "react";
import BasketStore from "./basket.ts";
import ModalsStore from "./modals.ts";

const store = {
  basketStore: new BasketStore(),
  modalsStore: new ModalsStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;
