import { makeAutoObservable } from "mobx";

class ModalsStore {
  paymentModalActive: boolean = false;
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
}

export default ModalsStore;
