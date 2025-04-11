import { Product } from "@/entities/Product";

export interface CatalogPageSchema {
  productModalActive: boolean;
  selectedProduct?: Product;
}
