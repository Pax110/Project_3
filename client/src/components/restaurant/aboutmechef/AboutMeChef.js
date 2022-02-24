import React from "react";
import { Container } from "react-bootstrap";
import ChefPhoto from "./ChefPhoto";

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
      <ChefPhoto />
      <div>
        AboutMeChef orem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </Container>
  );
};

export default AboutMeChef;
