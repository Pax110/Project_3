import Navbar from "./components/navigation/Navbar.js";
import Footer from "./components/footer/Footer.js";
import { Container, Row, Col } from "react-bootstrap";
import FirebaseProvider from "./components/FirebaseProvider";
import "./App.css";
import Router from "../src/Routes/Router";
import { UserAuthContextProvider } from "./components/context/UserAuthContext";
import CartProvider from "./components/context/CartProvider.js";

function App() {
  return (
    <Container className="App" style={{ maxWidth: "none", paddingTop: "80px" }}>
      <CartProvider>
        <FirebaseProvider>
          <UserAuthContextProvider>
            <Navbar style={{ position: "sticky" }} />
            <Router />
          </UserAuthContextProvider>
        </FirebaseProvider>
      </CartProvider>

      <Footer />
    </Container>
  );
}

export default App;
