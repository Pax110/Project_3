import React from "react";
import AboutUs from "../components/aboutus/AboutUs";
import LandingImage from "../components/landingimage/LandingImage";

import RestoDisplayCard from "../components/restaurant/RestoDisplayCard";
import Filters from "../components/cart/Filters";
function LandingPage() {
  return (
    <div>
      <Filters />
      <LandingImage />
      <RestoDisplayCard />
      <AboutUs />
    </div>
  );
}

export default LandingPage;
