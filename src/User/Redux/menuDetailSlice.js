import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuDetail: [],
};

const menuDetailSlice = createSlice({
  name: "menuDetailSlice",
  initialState,
  reducers: {
    setMenuDetail: (state, action) => {
      state.menuDetail = action.payload;
    },
  },
});

export const { setMenuDetail } = menuDetailSlice.actions;

export default menuDetailSlice.reducer;
