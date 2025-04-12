import { BasketItem } from "./basketItem.ts";

export interface BasketSchema {
  basketProducts: Array<BasketItem>;
  resultPrice: number;
}
