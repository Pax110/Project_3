import React from "react";

import ProtectedRoute from "../components/ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage.js";

import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import RestoSignUpPage from "../pages/RestoSignUpPage";
import MenuPage from "../pages/MenuPage";
import NeedHelpPage from "../pages/NeedHelpPage";
import OrderHistoryPage from "../pages/OrderHistoryPage";
import RestoDashboardPage from "../pages/RestoDashboardPage";
import EditRestroProfilePage from "../components/restaurant/EditRestroProfilePage";
import AdminPage from "../pages/AdminPage";
import EditRestoMenuPage from "../pages/EditRestoMenuPage";
import CartPage from "../pages/CartPage";
import RestoOrdersViewPage from "../pages/RestoOrdersViewPage";

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
        <Route path="/restaurant/signUp" element={<RestoSignUpPage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route
          path="/restaurant/editMenu/:id"
          element={
            <ProtectedRoute>
              <EditRestoMenuPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/restaurant/dashboard"
          element={
            <ProtectedRoute>
              <RestoDashboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/restaurant/orders/:id"
          element={
            <ProtectedRoute>
              <RestoOrdersViewPage />
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

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />

        <Route path="/menu/:id" element={<MenuPage />} />

        <Route
          path="/restaurant/editprofile/:id"
          element={
            <ProtectedRoute>
              <EditRestroProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default Router;
