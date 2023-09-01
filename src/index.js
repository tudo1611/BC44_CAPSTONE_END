import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import spinnerSlice from "./User/Redux/spinnerSlice";
import userSlice from "./User/Redux/userSlice";
import addCourses from "./User/Redux/courseSlice";
import setUserRegis from "./User/Redux/registerSlice";
import setDetail from "./User/Redux/detailSlice";
import setMenu from "./User/Redux/menuSlice";
import setMenuDetail from "./User/Redux/menuDetailSlice";
import setBooking from "./User/Redux/bookingSlice";
import deselectItem from "./User/Redux/selectedItemSlice";
import selectItem from "./User/Redux/selectedItemSlice";
const root = ReactDOM.createRoot(document.getElementById("root"));
export let store = configureStore({
  reducer: {
    userSlice: userSlice,
    spinnerSlice,
    addCourses,
    setUserRegis,
    setDetail,
    setMenu,
    setMenuDetail,
    setBooking,
    deselectItem,
    selectItem,
  },
});
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
