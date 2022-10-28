import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardKey: "",
};

export const smallCardSlice = createSlice({
  name: "smallCard",
  initialState,
  reducers: {
    setCartKey: (state, Action) => {
      state.cardKey = Action.payload;
    },
  },
});

export const { setCartKey } = smallCardSlice.actions;
export default smallCardSlice.reducer;
