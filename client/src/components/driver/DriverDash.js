import React from "react";
import { Button, Container } from "react-bootstrap";
import Map from "../map/Map";
import { Link } from "react-router-dom";
import background from "../landingimage/dash.jpeg";

const DriverDash = () => {
  const myStyle = {
    fontFamily: "Bebas Neue",
    textAlign: "center",
    textDecoration: "none",
  };
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "20px",
        height: "100%",
        marginTop: "-10px",
      }}
    >
      <Container
        style={{
          width: "auto",
          height: "100vh",
          backgroundColor: "#f7f4ef",
          borderRadius: "15px",
          padding: "2%",
        }}
      >
        <h1 className style={myStyle}>
          Driver Dashboard
        </h1>

        <Link to="/driver/orders">
          <Button style={{ marginBottom: "20px" }}>View Orders</Button>
        </Link>

        <Map />
      </Container>
    </div>
  );
};

export default DriverDash;
