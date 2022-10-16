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

const AppRoutes = () => {
  const { accessToken } = useSelector((state) => state.Auth);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={accessToken ? <DashboardPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={accessToken ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route
            path="/register"
            element={accessToken ? <Navigate to="/" /> : <RegisterPage />}
          />
          <Route
            path="/forget-password"
            element={accessToken ? <Navigate to="/" /> : <SentOtpPage />}
          />
          <Route
            path="/verify-otp"
            element={accessToken ? <Navigate to="/" /> : <VetifyOtpPage />}
          />
          <Route
            path="/reset-password"
            element={accessToken ? <Navigate to="/" /> : <ResetPasswordPage />}
          />
        </Routes>
      </BrowserRouter>
      <Toaster reverseOrder={false} />
      <FullScreenLoader />
    </>
  );
};

export default AppRoutes;
