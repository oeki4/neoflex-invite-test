import { StateSchema } from "./StateSchema.ts";
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { catalogPageSliceReducer } from "@/pages/CatalogPage";
import { basketSliceReducer } from "@/entities/Basket";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    catalogPage: catalogPageSliceReducer,
    basket: basketSliceReducer,
  };

  const store = configureStore<StateSchema>({
    reducer: rootReducers,
    preloadedState: initialState,
  });

  return store;
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
