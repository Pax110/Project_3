import React from "react";
import background from "../components/landingimage/wood.jpg";
import DriverOrders from "../components/driver/DriverOrders";

const DriverOrdersPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "60px",
        height: "100%",
      }}
    >
      <DriverOrders />
    </div>
  );
};

export default DriverOrdersPage;
