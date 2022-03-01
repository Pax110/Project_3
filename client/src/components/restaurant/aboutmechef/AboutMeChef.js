import React from "react";
import { Container, Col } from "react-bootstrap";
import ChefPic from "./ChefPic";

const AboutMeChef = ({ restaurant }) => {
  const myStyle = {
    fontFamily: "Bebas Neue",
    textAlign: "center",
    textDecoration: "none",
  };

  console.log("resto is:", restaurant);
  return (
    <Container
      style={{
        width: "auto",
        backgroundColor: "#f7f4ef",
        borderRadius: "15px",
        paddingRight: "50px",

        textDecoration: "none",
      }}
    >
      <Container
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          display: "flex",
          flexWrap: "wrap",
          gap: "5px",
          margin: "auto 0",
        }}
      >
        <Col xs={6} md={2}>
          <ChefPic restaurant={restaurant} />
        </Col>
        <Col
          xs={12}
          md={8}
          style={{ justifyContent: "right", padding: "2%", margin: "0 auto" }}
        >
          <>
            <h2> Chef {restaurant.contact.owner.firstName} </h2>
            <p>{restaurant.contact.owner.about}</p>
          </>
        </Col>
      </Container>
    </Container>
  );
};

export default AboutMeChef;
