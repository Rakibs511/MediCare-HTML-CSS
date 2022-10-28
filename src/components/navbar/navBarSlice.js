import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: null,
  sideBar:false,
  searchFilterToggle:true,
};

export const navBarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setSideBar:(state)=>{
        state.sideBar=!state.sideBar
    },
    setSearchFilterToggle:(state)=>{
        state.searchFilterToggle=!state.searchFilterToggle
    }
  },
});
export const {setSearchValue,setSideBar,setSearchFilterToggle} = navBarSlice.actions;
export default navBarSlice.reducer;
