import React from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { CartState } from "./context/CartProvider";

import { useUserAuth } from "./context/UserAuthContext";

const Home = () => {
  

  
  const {state: {cart}} = CartState()
  console.log("cart is",cart)
  return (
    <>  
    <Container style={{width: "400px"}}>
      <div className="p-4 box mt-3 text-center">
      <h2>Home</h2>
        Hello Welcome <br />
       
        
      </div>
      <div>
     
          </div>
          <br/>
      {/* <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div> */}
      </Container>
    </>
  );
};

export default Home;
