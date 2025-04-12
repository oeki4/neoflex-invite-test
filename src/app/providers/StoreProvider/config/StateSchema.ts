import { CatalogPageSchema } from "@/pages/CatalogPage";
import { BasketSchema } from "@/entities/Basket";
import { BasketPageSchema } from "@/pages/BasketPage";

export interface StateSchema {
  catalogPage: CatalogPageSchema;
  basket: BasketSchema;
  basketPage: BasketPageSchema;
}
