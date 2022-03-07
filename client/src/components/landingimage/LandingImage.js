import React from "react";
import firstPic from "./firstpic.png";
import secondPic from "./picpic.jpg";
import thirdPic from "./thirdpic.png";
import { Carousel } from "react-bootstrap";

const LandingImage = () => {
  return (
    <Carousel style={{ width: "100%", margin: "0px", marginTop: "-5px" }}>
      <Carousel.Item>
        <div
          className="d-block w-100"
          style={{
            backgroundImage: `url(${firstPic})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "600px",
          }}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Eat Local</h3>
          <p>Support small business, try something new today!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-100"
          style={{
            backgroundImage: `url(${secondPic})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "600px",
          }}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Join the Collective</h3>
          <p>Coworking spaces available, join the collective!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-100"
          style={{
            backgroundImage: `url(${thirdPic})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "600px",
          }}
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
