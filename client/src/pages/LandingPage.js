import React from "react";
import AboutUs from "../components/aboutus/AboutUs";
import LandingImage from "../components/landingimage/LandingImage";
import RestoDisplayCard from "../components/restaurant/RestoDisplayCard";

function LandingPage() {
  return (
    <div>
      <LandingImage />
      <AboutUs />
      <RestoDisplayCard />
    </div>
  );
}

export default LandingPage;
