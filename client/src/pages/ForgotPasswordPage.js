import React from "react";
import { Container } from "react-bootstrap";
import ForgotPassword from "../components/ForgotPassword";
import background from "../components/landingimage/food1.jpg";

const ForgotPasswordPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "200px",
        height: "100%",
      }}
    >
      <Container
        style={{
          width: "600px",
          backgroundColor: "rgba(225, 229, 235, 0.9)",
          height: 445,
        }}
      >
        <ForgotPassword />
      </Container>
    </div>
  );
};

export default ForgotPasswordPage;
