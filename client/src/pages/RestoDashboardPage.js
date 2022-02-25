import React from "react";

import RestoSelectMenu from "../components/restaurant/RestoSelectMenu";
import { Container } from "react-bootstrap";
import background from "../components/landingimage/dash.jpeg";


const RestoDashboardPage = () => {
  const myStyle = {
    fontFamily: "Bebas Neue",
  };
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
          width: "auto",
          backgroundColor: "#f7f4ef",
          borderRadius: "15px",
          padding: "2%",
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
    </div>
  );
};

export default RestoDashboardPage;
