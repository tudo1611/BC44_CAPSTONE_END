import { createSlice } from "@reduxjs/toolkit";
import { localServ } from "../service/localStoreService";

const initialState = {
  adminInfo: localServ.getAdmin(),
};

const adminSlice = createSlice({
  name: "adminSlice",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.adminInfo = action.payload;
    },
  },
});

export const { setLogin } = adminSlice.actions;

export default adminSlice.reducer;
