import React from "react";
import { Container } from "react-bootstrap";
import Wheel from "./wheel";
import background from "../landingimage/wood.jpg";

const WheelPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container
        style={{
          width: "600px",
          backgroundColor: "#f7f4ef",
          borderRadius: "15px",
        }}
      >
        <Wheel />
      </Container>
    </div>
  );
};

export default WheelPage;
