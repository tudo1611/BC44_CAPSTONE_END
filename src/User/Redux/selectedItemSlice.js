import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCourse: [],
};

const selectedItemSlice = createSlice({
  name: "selectedItemSlice",
  initialState,
  reducers: {
    selectItem: (state, action) => {
      state.selectedCourse.push(action.payload);
    },
    deselectItem: (state, action) => {
      state.selectedCourse = state.selectedCourse.filter(
        (item) => item == action.payload
      );
    },
  },
});

export const { selectItem, deselectItem } = selectedItemSlice.actions;

export default selectedItemSlice.reducer;
