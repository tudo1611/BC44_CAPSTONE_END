import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./User/Pages/HomePage/HomePage";
import LoginPage from "./User/Pages/LoginPage/LoginPage";
import DetailPage from "./User/Pages/DetailPage/DatailPage";
import NotFoundPage from "./User/Pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./User/Pages/RegisterPage/ResgisterPage";
import Layout from "./User/Components/Layout/Layout";
import MenuPage from "./User/Pages/MenuPage/MenuPage";
import UserInfo from "./User/Pages/UserInfo/UserInfo";
import Spinner from "./User/Components/Spinner/Spinner";
import ProtectedRoute from "./User/util/ProtectedRoute";
function App() {
  return (
    <div>
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                contentPage={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/user" element={<Layout contentPage={<UserInfo />} />} />
          <Route
            path="/detail/:id"
            element={<Layout contentPage={<DetailPage />} />}
          />
          <Route
            path="/menu/:maDanhMuc"
            element={<Layout contentPage={<MenuPage />} />}
          />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to={"/404"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
