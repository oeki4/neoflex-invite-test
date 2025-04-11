import { StateSchema } from "@/app/providers/StoreProvider";

export const getProductModalActive = (state: StateSchema) =>
  state.catalogPage.productModalActive;
