import React from "react";
import background from "../components/landingimage/food1.jpg";
import OrderHistory from "../components/OrderHistory";

const OrderHistoryPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "100px",
        height: "100%",
      }}
    >
      <OrderHistory />
    </div>
  );
};

export default OrderHistoryPage;
