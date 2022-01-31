import React from 'react';
import Profile from '../components/Profile';
import background from '../components/landingimage/food1.jpg'
import { Container } from 'react-bootstrap';

const ProfilePage = () => {
  return <div
    style={{
      backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}>
      
      <Container
          style={{
            width: "600px",
            backgroundColor: "rgba(225, 229, 235, 0.9)",
          }}
        >    
      
      <Profile />

      </Container>
  </div>;
};

export default ProfilePage

