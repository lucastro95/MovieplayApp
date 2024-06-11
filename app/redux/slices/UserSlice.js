import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        givenName: null,
        familyName: null, 
        nickName: null,
        email: null,
        photo: null,
        token: null,
        loggedIn: false
    },
    reducers: {
        logIn: (state, action) => {
            const {givenName, familyName, email, photo, token} = action.payload;
            state.givenName = givenName
            state.familyName = familyName
            state.nickName = `${givenName[0].toUpperCase()}${familyName[0].toUpperCase()}`
            state.email = email
            state.photo = photo
            state.token = token
            state.loggedIn = true
        },

        logOut: (state) => {
            state.givenName = null
            state.familyName = null
            state.nickName = null
            state.email = null
            state.photo = null
            state.token = null
            state.loggedIn = false
        },
    }
})

export const { logIn, logOut } = UserSlice.actions;
export default UserSlice.reducer;