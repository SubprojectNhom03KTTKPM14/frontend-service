import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productApi from '../../api/productApi'

const KEY = 'product'

export const fetchProdcts = createAsyncThunk(
    `${KEY}/fetchProdcts`,
    async (params, thunkApi) => {
        const data = await productApi.fetchProducts(params)
        return data
    }
)

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
    },
    reducers: {},
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default productSlice.reducer
