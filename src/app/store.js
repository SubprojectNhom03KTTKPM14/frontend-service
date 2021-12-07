import { configureStore } from '@reduxjs/toolkit'

import productReducer from '../redux/slice/productSlice'
import cartReducer from '../redux/slice/cartSlice'
import userReducer from '../redux/slice/userSlice'

const initalReducer = {
    product: productReducer,
    user: userReducer,
    cart: cartReducer,
}

export const store = configureStore({
    reducer: initalReducer,
})
