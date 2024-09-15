import { createContext, useContext } from "react";
import CatalogStore from "./basket.ts";

const store = {
  basketStore: new CatalogStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;
