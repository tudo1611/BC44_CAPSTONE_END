import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseBooking: {
    maKhoaHoc: 0,
  },
};

const bookingSlice = createSlice({
  name: "bookingSlice",
  initialState,
  reducers: {
    setBooking: (state, action) => {
      state.courseBooking = action.payload;
    },
  },
});

export const { setBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
