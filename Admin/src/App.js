import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Courses from "./pages/courses/Courses";
import AdminLayout from "./layouts/AdminLayout";
import LoadingSpinner from "./components/loadingSpinner/LoadingSpinner";
import AddCourse from "./pages/courses/addCourse/AddCourse";
import EditCourse from "./pages/courses/editCourse/EditCourse";
import ProtectedRoute from "./utils/ProtectedRoute";
import Users from "./pages/users/Users";
import AddUser from "./pages/users/addUser/AddUser";
import EditUser from "./pages/users/editUser/EditUser";
import UserProfile from "./pages/users/userProfile/UserProfile";
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <LoadingSpinner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRoute>
                  <AdminLayout
                    pageTitle="Dashboard"
                    contentPage={<Dashboard />}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <AdminLayout
                    pageTitle={"Dashboard"}
                    contentPage={<Dashboard />}
                  />
                </ProtectedRoute>
              }
            />
            <Route path="/courses">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <AdminLayout
                      pageTitle={"Courses Management"}
                      contentPage={<Courses />}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":add-course"
                element={
                  <ProtectedRoute>
                    <AdminLayout
                      pageTitle={"Add Course"}
                      contentPage={<AddCourse />}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":edit-course/:id"
                element={
                  <ProtectedRoute>
                    <AdminLayout
                      pageTitle={"Edit Course"}
                      contentPage={<EditCourse />}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":edit-course"
                element={
                  <ProtectedRoute>
                    <AdminLayout
                      pageTitle={"Courses"}
                      contentPage={<Courses />}
                    />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="/users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <AdminLayout
                      pageTitle={"Users List"}
                      contentPage={<Users />}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":user-profile/:id"
                element={
                  <ProtectedRoute>
                    <AdminLayout
                      pageTitle={"User Profile"}
                      contentPage={<UserProfile />}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":add-user"
                element={
                  <ProtectedRoute>
                    <AdminLayout
                      pageTitle={"Add User"}
                      contentPage={<AddUser />}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":edit-user/:id"
                element={
                  <ProtectedRoute>
                    <AdminLayout
                      pageTitle={"Edit User"}
                      contentPage={<EditUser />}
                    />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route
              path="*"
              element={
                <ProtectedRoute>
                  <AdminLayout
                    pageTitle={"Dashboard"}
                    contentPage={<Dashboard />}
                  />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
