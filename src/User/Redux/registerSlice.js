import { createSlice } from "@reduxjs/toolkit";
import { localServ } from "../services/localStoreService";
const initialState = {
  userRegis: localServ.getUser(),
};

const registerSlice = createSlice({
  name: "registerSlice",
  initialState,
  reducers: {
    setUserRegis: (state, action) => {
      state.userRegis = action.payload;
    },
  },
});

export const { setUserRegis } = registerSlice.actions;

export default registerSlice.reducer;
