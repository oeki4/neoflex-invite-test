import { PaymentMethod } from "./paymentMethod.ts";

export interface BasketPageSchema {
  paymentModalActive: boolean;
  selectedPaymentMethod?: PaymentMethod;
}
