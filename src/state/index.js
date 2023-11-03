import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null,
    token : null,
    isLoggedIn : false,
}

export const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },

        setLogout: (state) => {
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
        },
    }
})

export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;