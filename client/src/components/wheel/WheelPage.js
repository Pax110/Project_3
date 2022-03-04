import React from "react";
import { Container } from "react-bootstrap";
import Wheel from "./wheel";

const WheelPage = () => {
  return (
    <Container
      style={{
        width: "600px",
        backgroundColor: "#f7f4ef",
        borderRadius: "15px",
        paddingBottom: "15px",
      }}
    >
      <Wheel />
    </Container>
  );
};

export default WheelPage;
