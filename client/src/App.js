import Navbar from "./components/navigation/Navbar.js";
import Footer from "./components/footer/Footer.js";
import { Container, Row, Col } from "react-bootstrap";
import FirebaseProvider from "./components/FirebaseProvider";
import Router from "../src/Routes/Router";
import { UserAuthContextProvider } from "./components/context/UserAuthContext";
import CartProvider from "./components/context/CartProvider.js";
import "./App.css";
import RestoOrdersViewPendingContext from "./components/restaurant/RestoOrdersViewPendingContext.js";

function App() {
  return (
    <Container
      className="App"
      style={{
        maxWidth: "none",
        paddingTop: "65px",
        paddingRight: "0px",
        paddingLeft: "0px",
      }}
    >
      <FirebaseProvider>
        <UserAuthContextProvider>
          <CartProvider>
            <RestoOrdersViewPendingContext>
              <Navbar style={{ position: "sticky" }} />

              <Router />
            </RestoOrdersViewPendingContext>
          </CartProvider>
        </UserAuthContextProvider>
      </FirebaseProvider>

      <Footer />
    </Container>
  );
}

export default App;
