import { makeAutoObservable } from "mobx";

class ModalsStore {
  paymentModalActive: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }

  togglePaymentModal = () => {
    this.paymentModalActive = !this.paymentModalActive;
  };
}

export default ModalsStore;
