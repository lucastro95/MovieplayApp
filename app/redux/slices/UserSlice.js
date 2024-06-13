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
        id: null,
        loggedIn: false
    },
    reducers: {
        logIn: (state, action) => {
            const {givenName, familyName, nickName, email, photo, token, id} = action.payload;
            state.givenName = givenName
            state.familyName = familyName
            state.nickName = nickName || `${givenName[0].toUpperCase()}${familyName[0].toUpperCase()}`;
            state.email = email
            state.photo = photo
            state.token = token
            state.id = id
            state.loggedIn = true
        },

        logOut: (state) => {
            state.givenName = null
            state.familyName = null
            state.nickName = null
            state.email = null
            state.photo = null
            state.token = null
            state.id = null
            state.loggedIn = false
        },

        editName: (state, action) => {
            const { givenName, familyName } = action.payload;
            console.log(givenName, familyName);
            if (givenName !== undefined && givenName !== null && givenName !== '') {
                state.givenName = givenName;
            }
            if (familyName !== undefined && familyName !== null && familyName !== '') {
                state.familyName = familyName;
            }
        },

        editNickName: (state, action) => {
            const nickname = action.payload;
            state.nickName = nickname
            console.log(state.nickName);
        },
    }
})

export const { logIn, logOut, editName, editNickName } = UserSlice.actions;
export default UserSlice.reducer;