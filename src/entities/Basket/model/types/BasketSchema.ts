import { BasketProduct } from "@/types/store/basket.types.ts";

export interface BasketSchema {
  basketProducts: Array<BasketProduct>;
  resultPrice: number;
}
