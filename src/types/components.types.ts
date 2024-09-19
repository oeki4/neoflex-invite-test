import { Product } from "./pages/catalog.types.ts";
import { BasketProduct } from "./store/basket.types.ts";

export interface ProductCardProps {
  product: Product;
  toggleProductModal: (product: Product | null) => void;
  addToBasket: (product: Product) => void;
  currencyRate: number;
}

export interface BasketCardProps {
  product: BasketProduct;
  setBasketItemAmount: (id: number, value: number) => void;
  deleteItemFromBasket: (id: number) => void;
  currencyRate: number;
}
