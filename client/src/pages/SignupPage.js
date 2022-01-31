import React from 'react';
import Signup from '../components/Signup'
import background from '../components/landingimage/food1.jpg'
import { Container } from 'react-bootstrap';
const SignupPage = () => {
  return <div
  style={{
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: 445
  
}}>
    
    <Container
        style={{
          width: "600px",
          backgroundColor: "rgba(225, 229, 235, 0.9)",
          height: 445
        }}
      >    
    
    <Signup />

    </Container>
</div>;
};

export default SignupPage

