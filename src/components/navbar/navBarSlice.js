import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: null,
  sideBar:false
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
    }
  },
});
export const {setSearchValue,setSideBar} = navBarSlice.actions;
export default navBarSlice.reducer;
