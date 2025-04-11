import {createSlice} from "@reduxjs/toolkit";

const catalogPageSlice = createSlice({
	name: "catalogPageSlice",
	initialState: {
		productModalActive: false,
	},
	reducers: {},
})


export const { actions: catalogPageSliceActions } = catalogPageSlice;
export const { reducer: catalogPageSliceReducer } = catalogPageSlice;