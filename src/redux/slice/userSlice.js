import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userApi from '../../api/userApi'

const KEY = 'user'

// export const fetchProfile = createAsyncThunk(
//     `${KEY}/fetchProfile`,
//     async (params, thunkApi) => {
//         const data = await userApi.
//         return data
//     }
// )

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
    },
    reducers: {},
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default userSlice.reducer
