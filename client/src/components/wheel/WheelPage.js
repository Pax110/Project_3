import React from "react";
import { Container } from "react-bootstrap";
import Wheel from "./wheel";

const WheelPage = () => {
  return (
    <div>
      <Container
        style={{
          width: "400px",
          backgroundColor: "#f7f4ef",
          borderRadius: "15px",
          paddingBottom: "15px",
        }}
      >
        <Wheel />
      </Container>
    </div>
  );
};

export default WheelPage;
