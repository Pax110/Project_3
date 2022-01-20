import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "./context/UserAuthContext";
import {Link} from 'react-router-dom'
const Home = () => {
  const { logOut, user } = useUserAuth();
 
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>  
      <div className="p-4 box mt-3 text-center">
      <h2>Home</h2>
        Hello Welcome <br />
       
        {user && user.displayName}
      </div>
      <div>
      <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
          </div>
          <br/>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
