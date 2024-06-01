import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        givenName: null,
        familyName: null, 
        email: null,
        photo: null,
        loggedIn: false,
    },
    reducers: {
        logIn: (state, action) => {
            const {givenName, familyName, email, photo} = action.payload;
            state.givenName = givenName
            state.familyName = familyName
            state.email = email
            state.photo = photo
            state.loggedIn = true
            console.log(email)
        },

        logOut: (state) => {
            state.givenName = null
            state.familyName = null
            state.email = null
            state.photo = null
            state.loggedIn = false

        },
    }
})

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;