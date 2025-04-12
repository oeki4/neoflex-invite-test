import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketPageSchema } from "../types/BasketPageSchema.ts";
import { PaymentMethod } from "../types/paymentMethod.ts";

const initialState: BasketPageSchema = {
  paymentModalActive: false,
};

const basketPageSlice = createSlice({
  name: "basketPageSlice",
  initialState,
  reducers: {
    showPaymentModal: (state) => {
      state.paymentModalActive = true;
    },
    hidePaymentModal: (state) => {
      state.paymentModalActive = false;
    },
    setSelectedPaymentMethod: (state, action: PayloadAction<PaymentMethod>) => {
      state.selectedPaymentMethod = action.payload;
    },
  },
});

export const { actions: basketPageSliceActions } = basketPageSlice;
export const { reducer: basketPageSliceReducer } = basketPageSlice;
