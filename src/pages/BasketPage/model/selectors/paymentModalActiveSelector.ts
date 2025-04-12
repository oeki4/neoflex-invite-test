import { StateSchema } from "@/app/providers/StoreProvider";

export const getPaymentModalActive = (state: StateSchema) =>
  state.basketPage.paymentModalActive;
