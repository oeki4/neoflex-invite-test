import { makeAutoObservable } from "mobx";
import { BasketProduct } from "../types/store/basket.types.ts";

class BasketStore {
  basketProducts: Array<BasketProduct> = [];
  constructor() {
    makeAutoObservable(this);
  }

  setBasketProducts(products: Array<BasketProduct>) {
    this.basketProducts = products;
  }
}

export default BasketStore;
