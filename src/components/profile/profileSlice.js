import {createSlice} from '@reduxjs/toolkit';
const initialState={
    profileToggle:false,
    userId:""
}

export const profileSlice = createSlice({
    name:'profile',
    initialState,
    reducers:{
        setProfileToggle:(state)=>{
            state.profileToggle=!state.profileToggle;
        },
        setUserID:(state,action)=>{
            state.userId=action.payload
        }
    }
})

export const {setProfileToggle,setUserID} =profileSlice.actions;
export default profileSlice.reducer;
