import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productApi from '../../api/productApi'

const KEY = 'product'

export const fetchProducts = createAsyncThunk(
    `${KEY}/fetchProdcts`,
    async (params, thunkApi) => {
        const data = await productApi.fetchProducts(params)
        console.log(data)
        return data
    }
)

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        page: 0,
        totalPages: 0,
    },
    reducers: {},
    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => {
            const { data, page, totalPage } = action.payload
            state.products = data
            state.page = page
            state.totalPage = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default productSlice.reducer
