import Navbar from "./components/navigation/Navbar.js";
import Footer from "./components/footer/Footer.js";
import { Container, Row, Col } from "react-bootstrap";
import FirebaseProvider from "./components/FirebaseProvider";
import Router from "../src/Routes/Router";
import { UserAuthContextProvider } from "./components/context/UserAuthContext";
import CartProvider from "./components/context/CartProvider.js";
import "./App.css";

function App() {
  return (
    <Container className="App" style={{ maxWidth: "none", paddingTop: "80px" }}>
      <FirebaseProvider>
        <UserAuthContextProvider>
          <CartProvider>
            <Navbar style={{ position: "sticky" }} />

            <Router />
          </CartProvider>
        </UserAuthContextProvider>
      </FirebaseProvider>

      <Footer />
    </Container>
  );
}

export default App;
