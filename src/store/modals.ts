import { makeAutoObservable } from "mobx";
import { Product } from "../types/pages/catalog.types.ts";

class ModalsStore {
  paymentModalActive: boolean = false;
  productModalActive: boolean = false;
  selectedProduct: Product | null = null;
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

  toggleProductModal = (product: Product | null) => {
    this.productModalActive = !this.productModalActive;
    if (!this.productModalActive) {
      this.selectedProduct = null;
      document.body.style.overflow = "unset";
    } else {
      this.selectedProduct = product;
      document.body.style.overflow = "hidden";
    }
    console.log(this.selectedProduct);
  };
}

export default ModalsStore;
