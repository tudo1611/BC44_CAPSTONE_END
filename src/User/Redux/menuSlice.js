import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: [],
};

const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
  },
});

export const { setMenu } = menuSlice.actions;

export default menuSlice.reducer;
