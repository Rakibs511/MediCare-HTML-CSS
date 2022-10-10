import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "../pages/signUpPage/signUpSlice";
export const store= configureStore({
    reducer:{
        signUpSlice
    },
})