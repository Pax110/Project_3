
import Navbar from "./components/navigation/Navbar.js";
import Footer from "./components/footer/Footer.js";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Router from '../src/Routes/Router'


import { UserAuthContextProvider } from "./components/context/UserAuthContext";

function App() {
  return (
    <Container >
      <Navbar />
      <Container >
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Router />
          </UserAuthContextProvider>
        </Col>
      </Row>
      
      </Container>
      <Footer />
     
    </Container>
  );
}

export default App;

