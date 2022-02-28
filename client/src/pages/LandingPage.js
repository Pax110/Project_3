import React from "react";
import AboutUs from "../components/aboutus/AboutUs";
import LandingImage from "../components/landingimage/LandingImage";
import background from "../components/landingimage/wood.jpg";
import RestoDisplayCard from "../components/restaurant/RestoDisplayCard";
import Filters from "../components/cart/Filters";
import DriverSignUpPage from "../components/driver/DriverSignUpPage";
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
        <RestoDisplayCard />
        <Filters />
        <AboutUs />
        <DriverSignUpPage />
      </div>
    </div>
  );
}

export default LandingPage;
