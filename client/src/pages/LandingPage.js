import React from "react";
import AboutUs from "../components/aboutus/AboutUs";
import LandingImage from "../components/landingimage/LandingImage";
import background from "../components/landingimage/wood.jpg";
import logo from "../components/landingimage/logocc.png";
import RestoDisplayCard from "../components/restaurant/RestoDisplayCard";
import Filters from "../components/cart/Filters";
import { Row } from "react-bootstrap";
function LandingPage() {
  return (
    <div>
      <LandingImage />
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "50px",
          height: "100%",
        }}
      >
        <Row style={{ marginBottom: "30px" }}>
          <RestoDisplayCard />
          <Filters />
        </Row>
        <Row style={{ maxWidth: "none", margin: "0 auto" }}>
          <img
            src={logo}
            width="460px"
            height="460px"
            style={{ marginLeft: "70px" }}
            alt="logo"
          />
          <AboutUs />
        </Row>
      </div>
    </div>
  );
}

export default LandingPage;
