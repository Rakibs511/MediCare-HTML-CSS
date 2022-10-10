import { createSlice } from "@reduxjs/toolkit"

const initialState={
    phoneNumber:"",
    password:"",
    isLoading:false,
    phoneError:null,
    passwordError:null
}

export const signUpSlice = createSlice({
    name:'signUp',
    initialState,
    reducers:{
        setPhoneNumber:(state,action)=>{
            state.phoneNumber=action.payload;
        },
        setPassword:(state,action)=>{
            state.password=action.payload;
        },
        setIsloading:(state,action)=>{
            state.isLoading=action.payload;
        },
        setPhoneError:(state,action)=>{
            state.phoneError=action.payload;
        },
        setPasswordError:(state,action)=>{
            state.passwordError=action.payload;
        }
        
    }
})

export const{setPhoneNumber,setPassword,setIsloading,setPhoneError,setPasswordError}=signUpSlice.actions;

export default signUpSlice.reducer;