import React from "react";

import ProtectedRoute from "../components/ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage.js";
import ProfileTest from "../components/ProfileTest.js";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import UpdateProfilePage from "../pages/UpdateProfilePage";
import RestoSignUpPage from "../pages/RestoSignUpPage";
import MenuPage from "../pages/MenuPage";
import NeedHelpPage from "../pages/NeedHelpPage";
import OrderHistoryPage from "../pages/OrderHistoryPage";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update-profile"
          element={
            <ProtectedRoute>
              <UpdateProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="/signin" element={<LoginPage />} />

        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="/restaurant-signup" element={<RestoSignUpPage />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileTest />
            </ProtectedRoute>
          }
        />

        <Route
          path="/order-history"
          element={
            <ProtectedRoute>
              <OrderHistoryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/need-help"
          element={
            <ProtectedRoute>
              <NeedHelpPage />
            </ProtectedRoute>
          }
        />

        <Route path="/menu/:id" element={<MenuPage />} />

        <Route
          path="/edit-biz-profile"
          element={
            <ProtectedRoute>
              <RestroProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default Router;
