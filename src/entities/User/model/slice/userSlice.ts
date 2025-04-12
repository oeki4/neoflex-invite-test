import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSchema } from "../types/UserSchema.ts";
import { Lang, languages } from "@/shared/const/languages.ts";

const initialState: UserSchema = {
  lang: languages[0],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Lang>) => {
      state.lang = action.payload;
    },
  },
});

export const { actions: userSliceActions } = userSlice;
export const { reducer: userSliceReducer } = userSlice;
