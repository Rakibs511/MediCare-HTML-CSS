import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "../pages/signUpPage/signUpSlice";
import profileSlice from "../components/profile/profileSlice";
import navBarSlice from "../components/navbar/navBarSlice";
import  myPostSlice  from "../components/myPost/myPostSlice";
import medicineDetailsSlice from "../components/ShowMedcineDetails/medicineDetailsSlice";
import smallCardSlice from "../components/smallCard/smallCardSlice";

export const store= configureStore({
    reducer:{
        signUpSlice,
        profileSlice,
        navBarSlice,
        myPostSlice,
        medicineDetailsSlice,
        smallCardSlice
    },
})