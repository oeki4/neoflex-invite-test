import { CatalogPageSchema } from "@/pages/CatalogPage";
import { BasketSchema } from "@/entities/Basket";
import { BasketPageSchema } from "@/pages/BasketPage";
import { UserSchema } from "@/entities/User";

export interface StateSchema {
  catalogPage: CatalogPageSchema;
  basket: BasketSchema;
  basketPage: BasketPageSchema;
  user: UserSchema;
}
