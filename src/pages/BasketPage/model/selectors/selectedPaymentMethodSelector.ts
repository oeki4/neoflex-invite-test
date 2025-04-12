import { StateSchema } from "@/app/providers/StoreProvider";

export const getSelectedPaymentMethod = (state: StateSchema) =>
  state.basketPage.selectedPaymentMethod;
