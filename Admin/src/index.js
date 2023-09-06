import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import loadingSpinnerSlice from "./redux/loadingSpinnerSlice";
import courseSlice from "./redux/courseSlice";
import adminSlice from "./redux/adminSlice";
import detailSlice from "./redux/detailSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let store = configureStore({
  reducer: {
    loadingSpinnerSlice,
    courseSlice,
    detailSlice,
    adminSlice,
  },
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
