import Navbar from "./components/navigation/Navbar.js";
import Footer from "./components/footer/Footer.js";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./components/context/UserAuthContext";
import UpdateProfile from "./components/UpdateProfile.js";
import ForgotPassword from "./components/ForgotPassword.js";
import RestoSignUpForm from "./components/restaurant/RestoSignUpForm";

import LandingPage from "./components/LandingPage.js";
import Profile from "./components/Profile.js";
function App() {
  return (
    <Container>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
                <Route
                  path="/home"
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/update-profile"
                  element={
                    <ProtectedRoute>
                      <UpdateProfile />
                    </ProtectedRoute>
                  }
                />
                <Route path="/signin" element={<Login />} />
                <Route
                  path="/restaurant-signup"
                  element={<RestoSignUpForm />}
                />
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<Signup />} />

                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
