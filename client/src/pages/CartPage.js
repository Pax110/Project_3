import React from "react";
import background from "../components/landingimage/wood.jpg";
import Cart from "../components/cart/Cart";

const CartPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "50px",
        height: "100%",
      }}
    >
      <Cart />
    </div>
  );
};

export default CartPage;
