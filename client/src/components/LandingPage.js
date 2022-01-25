import React from 'react';
import LandingImage from './landingimage/LandingImage';
import RestoDisplayCard from './restaurant/RestoDisplayCard';

function LandingPage() {
  return <div style={{width: "1000px"}}>
      <LandingImage />
      <RestoDisplayCard />
      </div>;
}

export default LandingPage;
