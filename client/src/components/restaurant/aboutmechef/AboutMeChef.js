import React from "react";
import { Container, Col } from "react-bootstrap";
import ChefPic from "./ChefPic";

const AboutMeChef = () => {
  const myStyle = {
    fontFamily: "Bebas Neue",
    textAlign: "center",
    textDecoration: "none",
  };
  return (
    <Container
      style={{
        width: "auto",
        backgroundColor: "#f7f4ef",
        borderRadius: "15px",
        padding: "15px",
        paddingRight: "50px",
        textDecoration: "none",
      }}
    >
      <Container
        style={{
          padding: "none",
          backgroundColor: "white",
          borderRadius: "10px",
          display: "flex",
          flexWrap: "wrap",
          margin: "15px",
          gap: "5px",
        }}
      >
        <Col xs={6} md={2}>
          <ChefPic />
        </Col>
        <Col
          xs={12}
          md={8}
          style={{ justifyContent: "right", padding: "2%", margin: "0 auto" }}
        >
          AboutMeChef orem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum
        </Col>
      </Container>
    </Container>
  );
};

export default AboutMeChef;
