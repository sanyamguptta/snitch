// file for organizing & centralizing data
import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/state/auth.slice';

export const store = configureStore({
    reducer: {
        // all reducers are kept here
        auth: authReducer,
    }
})