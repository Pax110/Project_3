import React from "react";
import AboutUs from "../components/aboutus/AboutUs";
import LandingImage from "../components/landingimage/LandingImage";
import Magic8 from "../components/magic8/Magic8";
import RestoDisplayCard from "../components/restaurant/RestoDisplayCard";
import Filters from '../components/cart/Filters'
function LandingPage() {
  return (
    <div>
      <Filters/>
      <LandingImage />
      <AboutUs />
      <RestoDisplayCard />
      {/* <Magic8 /> */}
    </div>
  );
}

export default LandingPage;
