import React from "react";
import RestoSelectMenu from "../components/restaurant/RestoSelectMenu";
import { Container } from "react-bootstrap";

//Need to add id and key to links

const RestoDashboardPage = () => {
  const myStyle = {
    fontFamily: "Bebas Neue",
  };
  return (
    <Container
      style={{
        width: "auto",
        backgroundColor: "#f7f4ef",
        borderRadius: "15px",
      }}
    >
      <div>
        <h3 className style={myStyle}>
          Restaurant Dashboard
        </h3>
        <RestoSelectMenu
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </div>
    </Container>
  );
};

export default RestoDashboardPage;
