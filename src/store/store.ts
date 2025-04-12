import { createContext, useContext } from "react";
import UserStore from "./user.ts";

const store = {
  userStore: new UserStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;
