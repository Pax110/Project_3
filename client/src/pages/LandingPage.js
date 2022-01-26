import React from 'react';
import LandingImage from '../components/landingimage/LandingImage';
import RestoDisplayCard from '../components/restaurant/RestoDisplayCard';

function LandingPage() {
  return <div style={{width: "1000px"}}>
      <LandingImage />
      <RestoDisplayCard />
      </div>;
}

export default LandingPage;
