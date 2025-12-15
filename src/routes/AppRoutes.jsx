import { Routes, Route, Navigate } from "react-router-dom";
import { ErrorPageMessage } from "../components/common/ErrorMessage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AllVideos from "../pages/AllVideos";
import Admin from "../pages/Admin";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate
            to="/home"
            replace
          />
        }
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/home"
        element={<Home />}
      />
      <Route
        path="/all-videos"
        element={<AllVideos />}
      />
      <Route
        path="/admin"
        element={<Admin />}
      />
      <Route
        path="*"
        element={<ErrorPageMessage />}
      />
    </Routes>
  );
};

export default AppRoutes;
