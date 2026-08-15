// file for defining the state & logic for updating the state
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        // states of auth
        user: null,
        loading: false,
        error: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})


export const { setUser, setLoading, setError } = authSlice.actions;
// exporting reducer 
export default authSlice.reducer;