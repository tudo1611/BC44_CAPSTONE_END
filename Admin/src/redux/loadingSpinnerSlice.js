import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const loadingSpinnerSlice = createSlice({
  name: "loadingSpinnerSlice",
  initialState,
  reducers: {
    showLoading: (state, action) => {
      state.isLoading = true;
    },
    hideLoading: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { showLoading, hideLoading } = loadingSpinnerSlice.actions;

export default loadingSpinnerSlice.reducer;
