import { StateSchema } from "./StateSchema.ts";
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { catalogPageSliceReducer } from "@/pages/CatalogPage";
import { basketSliceReducer } from "@/entities/Basket";
import { basketPageSliceReducer } from "@/pages/BasketPage";
import { userSliceReducer } from "@/entities/User";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    catalogPage: catalogPageSliceReducer,
    basket: basketSliceReducer,
    basketPage: basketPageSliceReducer,
    user: userSliceReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    preloadedState: initialState,
  });
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
