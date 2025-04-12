import { CatalogPageSchema } from "@/pages/CatalogPage";
import { BasketSchema } from "@/entities/Basket";

export interface StateSchema {
  catalogPage: CatalogPageSchema;
  basket: BasketSchema;
}
