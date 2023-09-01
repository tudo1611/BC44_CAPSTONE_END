import React from "react";
import { useSelector } from "react-redux";
import { localServ } from "../../services/localStoreService";
import { NavLink } from "react-router-dom";
export default function UserNav() {
  let user = useSelector((state) => state.userSlice.userInfo);
  let btnClass = "px-3 py-1 mr-3 rounded ";
  let handleLogout = () => {
    localServ.removeUser();
    window.location.reload();
    window.location.href = "/";
  };
  let renderContent = () => {
    if (user) {
      return (
        <>
          <NavLink to={"/user"} className="btn-gradient mr-3">
            {user.hoTen}
          </NavLink>
          <button
            style={{
              backgroundColor: "#38a3a5",
            }}
            onClick={handleLogout}
            className="btn-gradient"
          >
            ĐĂNG XUẤT
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            style={{
              backgroundColor: "#38a3a5",
            }}
            onClick={() => {
              window.location.href = "/login";
            }}
            className="btn-gradient mr-3"
          >
            ĐĂNG NHẬP
          </button>
          <button
            style={{
              backgroundColor: "#38a3a5",
            }}
            onClick={() => {
              window.location.href = "/register";
              localStorage.clear("signUp");
            }}
            className="btn-gradient"
          >
            ĐĂNG KÝ
          </button>
        </>
      );
    }
  };

  return <div className="flex items-center  text-sm ">{renderContent()}</div>;
}
