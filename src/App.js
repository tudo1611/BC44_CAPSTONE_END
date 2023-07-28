import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import DetailPage from "./Pages/DetailPage/DatailPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./Pages/RegisterPage/ResgisterPage";
import Layout from "./Components/Layout/Layout";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/detail/:id"
            element={<Layout contentPage={<DetailPage />} />}
          />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to={"/404"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
