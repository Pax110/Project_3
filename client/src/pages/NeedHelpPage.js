import React from "react";
import NeedHelp from "../components/NeedHelp";
import background from "../components/landingimage/food1.jpg";
import { Container } from "react-bootstrap";

const NeedHelpPage = () => {
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
      {/* <Container
        style={{
          width: "600px",
          backgroundColor: "rgba(225, 229, 235, 0.9)",
        }}
      >     */}

      <NeedHelp />

      {/* </Container> */}
    </div>
  );
};

export default NeedHelpPage;
