//External Lib Import
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

//Internal Lib Import
import LoginPage from "../page/AuthPage/LoginPage";
import RegisterPage from "../page/AuthPage/RegisterPage";
import DashboardPage from "../page/DashboardPage/DashboardPage";
import FullScreenLoader from "../components/Common/FullScreenLoader";
import SentOtpPage from "../page/RecoveryPage/SentOtpPage";
import VetifyOtpPage from "../page/RecoveryPage/VetifyOtpPage";
import ResetPasswordPage from "../page/RecoveryPage/ResetPasswordPage";
import HomePage from "../page/HomePage/HomePage";
import EditProfilePage from "../page/EditProfilePage/EditProfilePage";
import NotFoundPage from "../page/NotFoundPage/NotFoundPage";

const AppRoutes = () => {
  const { AccessToken } = useSelector((state) => state.Auth);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={AccessToken ? <DashboardPage /> : <Navigate to="/login" />}
            key={Date.now()}
          />
          <Route
            path="/dashboard"
            element={AccessToken ? <DashboardPage /> : <Navigate to="/login" />}
            key={Date.now()}
          />
          <Route
            path="/account"
            element={
              AccessToken ? <EditProfilePage /> : <Navigate to="/login" />
            }
            key={Date.now()}
          />
          <Route
            path="/login"
            element={AccessToken ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route
            path="/register"
            element={AccessToken ? <Navigate to="/" /> : <RegisterPage />}
          />
          <Route
            path="/forget-password"
            element={AccessToken ? <Navigate to="/" /> : <SentOtpPage />}
          />
          <Route
            path="/verify-otp"
            element={AccessToken ? <Navigate to="/" /> : <VetifyOtpPage />}
          />
          <Route
            path="/reset-password"
            element={AccessToken ? <Navigate to="/" /> : <ResetPasswordPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
      <Toaster reverseOrder={false} />
      <FullScreenLoader />
    </>
  );
};

export default AppRoutes;
