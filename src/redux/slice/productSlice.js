import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../../api/productApi";

const KEY = "product";

export const fetchProducts = createAsyncThunk(
	`${KEY}/fetchProdcts`,
	async (params, thunkApi) => {
		const data = await productApi.fetchProducts(params);
		return data;
	}
);

export const fetchCategories = createAsyncThunk(
	`${KEY}/fetchCategories`,
	async (params, thunkApi) => {
		const data = await productApi.fetchCategories();
		return data;
	}
);

export const productSlice = createSlice({
	name: "product",
	initialState: {
		products: [],
		currentPage: 0,
		totalPages: 0,
		categories: [],
	},
	reducers: {},
	extraReducers: {
		[fetchProducts.fulfilled]: (state, action) => {
			const { data, page, totalPages } = action.payload;
			state.products = data;
			state.currentPage = page;
			state.totalPages = totalPages;
		},
		[fetchCategories.fulfilled]: (state, action) => {
			state.categories = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default productSlice.reducer;
