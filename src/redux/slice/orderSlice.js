import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderApi from "../../api/orderApi";

const KEY = "order";

export const fetchOrder = createAsyncThunk(
	`${KEY}/fetchOrder`,
	async (params, thunkApi) => {
		const data = await orderApi.fetchOrderOfUser(params);
		return data;
	}
);

export const fetchOrderList = createAsyncThunk(
	`${KEY}/fetchOrderList`,
	async (params, thunkApi) => {
		const data = await orderApi.fetchOrders();
		return data;
	}
);

export const orderSlice = createSlice({
	name: "user",
	initialState: {
		order: null,
		orderList: [],
		isLoading: false,
	},
	reducers: {},
	extraReducers: {
		[fetchOrder.fulfilled]: (state, action) => {
			state.order = action.payload;
		},

		// TODO <================= fetchUserList =================>
		[fetchOrderList.pending]: (state, action) => {
			state.isLoading = true;
		},
		[fetchOrderList.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.orderList = action.payload;
		},
		[fetchOrderList.rejected]: (state, action) => {
			state.isLoading = false;
		},
	},
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default orderSlice.reducer;
