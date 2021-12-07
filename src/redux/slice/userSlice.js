import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userApi from '../../api/userApi'

const KEY = 'user'

export const fetchProfile = createAsyncThunk(
    `${KEY}/fetchProfile`,
    async (params, thunkApi) => {
        const data = await userApi.fetchProfile()
        return data
    }
)

export const fetchUserList = createAsyncThunk(
    `${KEY}/fetchUserList`,
    async (params, thunkApi) => {
        const data = await userApi.fetchUser()
        return data
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        userList: [],
        isLoading: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
    },
    extraReducers: {
        [fetchProfile.fulfilled]: (state, action) => {
            state.user = action.payload
        },

        // TODO <================= fetchUserList =================>
        [fetchUserList.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchUserList.fulfilled]: (state, action) => {
            state.isLoading = false
            state.userList = action.payload
        },
        [fetchUserList.rejected]: (state, action) => {
            state.isLoading = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer
