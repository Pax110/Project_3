import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage.js";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ProfilePage from "../pages/ProfilePage";
import RestoSignUpPage from "../pages/RestoSignUpPage";
import MenuPage from "../pages/MenuPage";
import NeedHelpPage from "../pages/NeedHelpPage";
import OrderHistoryPage from "../pages/OrderHistoryPage";
import EditRestroProfilePage from "../components/restaurant/EditRestroProfilePage";
import AdminPage from "../pages/AdminPage";
import EditRestoMenuPage from "../pages/EditRestoMenuPage";
import CartPage from "../pages/CartPage";
import RestoOrdersViewPage from "../pages/RestoOrdersViewPage";
import AdminUsersProfilePage from "../pages/AdminUsersProfilePage";
import TrackOrderPage from "../pages/TrackOrderPage";
import RestoDashboardPage from "../pages/RestoDashboardPage";
import DriverPage from "../pages/DriverPage";
import DriverOrdersPage from "../pages/DriverOrdersPage";
import DriverSignUpPage from "../components/driver/DriverSignUpPage";
import EditChefProfilePage from "../pages/EditChefProfilePage";
import Wheel from "../components/wheel/wheel";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/wheel" element={<Wheel />} />

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
        <Route path="/cart/:id" element={<CartPage />} />
        <Route path="/menu/:id" element={<MenuPage />} />

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
          path="/track-order"
          element={
            <ProtectedRoute>
              <TrackOrderPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/restaurant/editmenu/:id"
          element={
            <ProtectedRoute>
              <EditRestoMenuPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/restaurant/chefprofile/:id"
          element={
            <ProtectedRoute>
              <EditChefProfilePage />
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
          path="/restaurant/editprofile/:id"
          element={
            <ProtectedRoute>
              <EditRestroProfilePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/driver"
          element={
            <ProtectedRoute>
              <DriverPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/driver/orders"
          element={
            <ProtectedRoute>
              <DriverOrdersPage />
            </ProtectedRoute>
          }
        />
        <Route path="/driver/signup" element={<DriverSignUpPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/user-profile/:id"
          element={
            <ProtectedRoute>
              <AdminUsersProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default Router;
