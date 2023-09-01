import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: {},
};

const courseSlice = createSlice({
  name: "courseSlice",
  initialState,
  reducers: {
    addCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const { addCourses } = courseSlice.actions;

export default courseSlice.reducer;
