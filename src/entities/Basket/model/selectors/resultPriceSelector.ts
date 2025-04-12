import { StateSchema } from "@/app/providers/StoreProvider";

export const getResultPrice = (state: StateSchema) => state.basket.resultPrice;
