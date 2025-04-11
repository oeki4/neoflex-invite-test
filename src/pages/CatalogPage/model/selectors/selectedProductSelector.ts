import { StateSchema } from "@/app/providers/StoreProvider";

export const getSelectedProduct = (state: StateSchema) =>
  state.catalogPage.selectedProduct;
