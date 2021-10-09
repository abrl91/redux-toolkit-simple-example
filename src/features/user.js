import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {name: '', age: 0, email: ''}

export const userSlice = createSlice({
    name: "user",
    initialState: {value: initialStateValue},
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state, action) => {
            state.value = initialStateValue;
        }
    }
});

export const {login, logout} = userSlice.actions;

const userReduser = userSlice.reducer;

export default userReduser;