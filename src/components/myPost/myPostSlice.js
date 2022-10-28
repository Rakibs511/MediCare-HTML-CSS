import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myPostToggle: false
};

export const myPostSlice = createSlice({
  name: "MyPost",
  initialState,
  reducers: {
    setMyPostToggle: (state) => {
      state.myPostToggle = !state.myPostToggle;
    },
  },
});

export const {setMyPostToggle}= myPostSlice.actions;
export default myPostSlice.reducer;
