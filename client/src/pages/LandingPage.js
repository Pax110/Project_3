import React from "react";
import AboutUs from "../components/aboutus/AboutUs";
import LandingImage from "../components/landingimage/LandingImage";
import Magic8 from "../components/magic8/Magic8";
import RestoDisplayCard from "../components/restaurant/RestoDisplayCard";

function LandingPage() {
  return (
    <div>
      <LandingImage />
      <RestoDisplayCard />
      <AboutUs />
      <Magic8 />
    </div>
  );
}

export default LandingPage;
