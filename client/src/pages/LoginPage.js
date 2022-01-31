import React from 'react';
import { Container } from 'react-bootstrap';
import Login from '../components/Login'
import background from '../components/landingimage/food1.jpg'

const LoginPage = () => {
  return  <div
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
    
    <Login />

    </Container>
</div>;
};

export default LoginPage;
