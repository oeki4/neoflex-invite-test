import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketSchema } from "../types/BasketSchema.ts";
import { Product } from "@/entities/Product";
import { BasketItem } from "@/entities/Basket";

const initialState: BasketSchema = {
  basketProducts: [],
  resultPrice: 0,
};

const basketSlice = createSlice({
  name: "basketSlice",
  initialState,
  reducers: {
    addProductToBasket(state, action: PayloadAction<Product | null>) {
      if (!action.payload) return;
      const basket = localStorage.getItem("basket");
      if (basket == null) {
        const basketJson: BasketItem[] = [];
        basketJson.push({
          ...action.payload,
          amount: 1,
        });
        localStorage.setItem("basket", JSON.stringify(basketJson));
        state.basketProducts = basketJson;
        return;
      }
      try {
        const basketJson: BasketItem[] = JSON.parse(basket);

        const basketItemIndex = basketJson.findIndex(
          (el) => el.id === action.payload?.id,
        );

        if (basketItemIndex != -1 && basketJson[basketItemIndex].amount) {
          basketJson[basketItemIndex].amount += 1;
        } else {
          basketJson.push({
            ...action.payload,
            amount: 1,
          });
        }

        localStorage.setItem("basket", JSON.stringify(basketJson));
        state.basketProducts = basketJson;
      } catch {
        localStorage.setItem("basket", JSON.stringify([]));
        state.basketProducts = [];
      }
    },
    deleteBasketItem(state, action: PayloadAction<number>) {
      state.basketProducts = state.basketProducts.filter(
        (el) => el.id !== action.payload,
      );
      localStorage.setItem("basket", JSON.stringify(state.basketProducts));
    },
    setBasketItemAmount(
      state,
      action: PayloadAction<{
        id: number;
        value: number;
      }>,
    ) {
      if (action.payload.value < 1) {
        state.basketProducts = state.basketProducts.filter(
          (el) => el.id !== action.payload.id,
        );
        localStorage.setItem("basket", JSON.stringify(state.basketProducts));
        return;
      }
      state.basketProducts = state.basketProducts.map((el) => {
        if (el.id === action.payload.id) {
          return {
            ...el,
            amount: action.payload.value,
          };
        }
        return el;
      });
      localStorage.setItem("basket", JSON.stringify(state.basketProducts));
    },
    initBasket(state) {
      const basket = localStorage.getItem("basket");
      if (basket) {
        try {
          const basketJson = JSON.parse(basket);
          state.basketProducts = basketJson;
        } catch {
          localStorage.setItem("basket", JSON.stringify([]));
        }
      }
    },
    setResultPrice(state, action: PayloadAction<number>) {
      state.resultPrice = action.payload;
    },
  },
});

export const { actions: basketSliceActions } = basketSlice;
export const { reducer: basketSliceReducer } = basketSlice;
