import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  profileToggle: false,
  postToggle: false,
  userId: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileToggle: (state) => {
      state.profileToggle = !state.profileToggle;
    },
    setPostToggle: (state) => {
      state.postToggle = !state.postToggle;
    },

    setUserID: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setProfileToggle, setPostToggle, setUserID } =
  profileSlice.actions;
export default profileSlice.reducer;
