import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../components/footer/Footer";
import LanguageIcon from "@mui/icons-material/Language";
import GridViewIcon from "@mui/icons-material/GridView";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import "./index.css";
import { localServ } from "../service/localStoreService";

const AdminLayout = ({ pageTitle, contentPage }) => {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const currentUrl = useLocation().pathname.replace("/", "");

  let handleLogOut = () => {
    localServ.removeAdmin();
    localServ.removeAcessToken();
    setTimeout(() => {
      navigate("/login");
    }, 600);
  };
  return (
    <main className={show ? "space-toggle" : null}>
      {/* header */}
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}></i>
        </div>
        <div className="menu-items">
          <div className="item">
            <GridViewIcon className="menu-icon" />
          </div>
          <div className="item">
            <LanguageIcon className="menu-icon" />
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="menu-icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="menu-icon" />
            <div className="numb">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="menu-icon" />
            <div className="numb">2</div>
          </div>
          <div className="item">
            <img
              src="https://i.pravatar.cc/300"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
      </header>

      {/* sidebar */}
      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>
            <Link to="/dashboard" className="nav-logo">
              <i className="fa fa-book-reader nav-logo-icon"></i>
              <span className="nav-logo-name">E - Admin</span>
            </Link>

            <div className="nav-list">
              <Link
                to="/dashboard"
                className={`nav-link ${
                  currentUrl === "" || currentUrl.includes("dashboard")
                    ? "active"
                    : ""
                }`}
              >
                <i className="fas fa-tachometer-alt nav-link-icon"></i>
                <span className="nav-link-name">Dashboard</span>
              </Link>
              <Link
                to="/courses"
                className={`nav-link ${
                  currentUrl.includes("courses") ? "active" : ""
                }`}
              >
                <i className="fa fa-folder-open nav-link-icon"></i>
                <span className="nav-link-name">Courses</span>
              </Link>
              <Link
                to="/users"
                className={`nav-link ${
                  currentUrl.includes("users") ? "active" : ""
                }`}
              >
                <i className="fa fa-user-graduate nav-link-icon"></i>
                <span className="nav-link-name">Teachers</span>
              </Link>
              <Link
                to="/notifications"
                className={`nav-link ${
                  currentUrl.includes("notifications") ? "active" : ""
                }`}
              >
                <i className="fa fa-bell nav-link-icon"></i>
                <span className="nav-link-name">Notification</span>
              </Link>
            </div>
          </div>

          <div className="nav-link" onClick={handleLogOut}>
            <i className="fas fa-sign-out nav-link-icon"></i>
            <span className="nav-link-name">Logout</span>
          </div>
        </nav>
      </aside>
      <div className="page-contents">
        <h4 className="page-title">{pageTitle}</h4>
        {contentPage}
      </div>
      <Footer />
    </main>
  );
};

export default AdminLayout;
