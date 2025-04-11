import { makeAutoObservable } from "mobx";
import { PaymentMethod } from "../types/pages/basket.types.ts";

class ModalsStore {
  paymentModalActive: boolean = false;
  selectedPaymentMethod: PaymentMethod | null = null;
  constructor() {
    makeAutoObservable(this);
  }

  togglePaymentModal = () => {
    this.paymentModalActive = !this.paymentModalActive;
    if (!this.paymentModalActive) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  setSelectedPaymentMethod = (method: PaymentMethod) => {
    this.selectedPaymentMethod = method;
  };
}

export default ModalsStore;
