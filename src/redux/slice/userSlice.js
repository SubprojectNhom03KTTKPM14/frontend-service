import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userApi from '../../api/userApi'

const KEY = 'user'

export const fetchProfile = createAsyncThunk(
    `${KEY}/fetchProfile`,
    async (params, thunkApi) => {
        const data = await userApi.fetchProfile()
        console.log('data', data)
        return data
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {},
    extraReducers: {
        [fetchProfile.fulfilled]: (state, action) => {
            state.user = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default userSlice.reducer
