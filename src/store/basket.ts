import { makeAutoObservable } from "mobx";
import { BasketProduct } from "../types/store/basket.types.ts";

class BasketStore {
  basketProducts: Array<BasketProduct> = [];
  resultPrice: number = 0;
  constructor() {
    makeAutoObservable(this);
  }

  setBasketProducts(products: Array<BasketProduct>) {
    this.basketProducts = products;
  }

  setResultPrice(value: number) {
    this.resultPrice = value;
  }
}

export default BasketStore;
