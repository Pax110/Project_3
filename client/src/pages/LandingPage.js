import React from "react";
import AboutUs from "../components/aboutus/AboutUs";
import LandingImage from "../components/landingimage/LandingImage";
import background from "../components/landingimage/wood.jpg";
import logo from "../components/landingimage/logocc.png";
import RestoDisplayCard from "../components/restaurant/RestoDisplayCard";
import Filters from "../components/cart/Filters";
import { Col, Row } from "react-bootstrap";
import DriverSignUpPage from "../components/driver/DriverSignUpPage";
import ChefSpotlight from "../components/restaurant/ChefSpotlight";
import"../css/landingpage.css";
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
          <Col className="col-md-8 col-sm-12 col-xs-12">
            <RestoDisplayCard />
          </Col>
          <Col className="col-md-3 col-sm-12 col-xs-12">
            <Filters />
            <ChefSpotlight />
          </Col>
        </Row>
        <Row style={{ maxWidth: "none", margin: "0 auto" }}>
          <img
            src={logo}
            width="460px"
            height="460px"
            className="imgAbout"
            style={{ marginLeft: "70px", maxWidth: "none", width: "30%" }}
            alt="logo"
          />
          <AboutUs />
        </Row>
      </div>
    </div>
  );
}

export default LandingPage;
