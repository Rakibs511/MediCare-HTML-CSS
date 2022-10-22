import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "../pages/signUpPage/signUpSlice";
import profileSlice from "../components/profile/profileSlice";
export const store= configureStore({
    reducer:{
        signUpSlice,
        profileSlice
    },
})