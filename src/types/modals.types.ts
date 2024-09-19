import { Product } from "./pages/catalog.types.ts";
import { PaymentMethod } from "./pages/basket.types.ts";

export interface ProductModalProps {
  isActive: boolean;
  toggleIsActive: (product: Product | null) => void;
  product: Product | null;
  addToBasket: (product: Product | null) => void;
  currencyRate: number;
}

export interface PaymentModalProps {
  isActive: boolean;
  toggleIsActive: () => void;
  resultPrice: number;
  paymentMethods: PaymentMethod[];
  setSelectedPaymentMethod: (method: PaymentMethod) => void;
  selectedPaymentMethod: PaymentMethod | null;
  currencyRate: number;
}
