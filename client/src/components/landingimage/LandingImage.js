import React from "react";
import firstPic from "./food1.jpg";
import secondPic from "./food.jpg";
import thirdPic from "./header.jpg";
import { Carousel } from "react-bootstrap";

const LandingImage = () => {
  return (
    <Carousel style={{ width: "100%", margin: "0px" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${firstPic}`}
          style={{ width: "100%", height: "600px" }}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Eat Local</h3>
          <p>Support small business, try something new today!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${secondPic}`}
          style={{ width: "800px", height: "600px" }}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Join the Collective</h3>
          <p>Coworking spaces available, join the collective!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${thirdPic}`}
          style={{ width: "800px", height: "600px" }}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Grow Your Business</h3>
          <p>From home kitchen, to the masses!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default LandingImage;
