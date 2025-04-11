import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/entities/Product";
import { CatalogPageSchema } from "@/pages/CatalogPage";

const initialState: CatalogPageSchema = {
  productModalActive: false,
};

const catalogPageSlice = createSlice({
  name: "catalogPageSlice",
  initialState,
  reducers: {
    showProductModal: (state) => {
      state.productModalActive = true;
    },
    hideProductModal: (state) => {
      state.productModalActive = false;
    },
    setSelectedProduct(state, action: PayloadAction<Product | undefined>) {
      state.selectedProduct = action.payload;
    },
  },
});

export const { actions: catalogPageSliceActions } = catalogPageSlice;
export const { reducer: catalogPageSliceReducer } = catalogPageSlice;
