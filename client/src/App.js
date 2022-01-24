
import LandingImage from "./components/landingimage/LandingImage.js";
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
import RestoDisplayCard from "./components/restaurant/RestoDisplayCard"
import LandingPage from "./components/LandingPage.js";
function App() {
  return (
    <Container >
      <Navbar />
      <Container style={{ width: "400px" }}>
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
              <Route path="/update-profile" element={<UpdateProfile />} />
              <Route path="/signin" element={<Login />} />

              <Route path="/" element={<LandingPage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/home" element={<Home />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              
              

              
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
      
      </Container>
      <Footer />
      {/* <RestoDisplayCard/> */}
    </Container>
  );
}

export default App;

