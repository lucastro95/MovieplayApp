import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        loggedIn: false,
        givenName: null,
        familyName: null, 
        email: null,
        photo: null,
    },
    reducers: {
        logIn: (state, action) => {
            const {givenName, familyName, email, photo} = action.payload;
            state.loggedIn = true
            state.givenName = givenName
            state.familyName = familyName
            state.email = email
            state.photo = photo
        },

        logOut: (state) => {
            state.loggedIn = false
            state.givenName = null
            state.familyName = null
            state.email = null
            state.photo = null

        },
    }
})

export const { logIn, logOut } = UserSlice.actions;
export default UserSlice.reducer;