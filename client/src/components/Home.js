import React from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

import { useUserAuth } from "./context/UserAuthContext";

const Home = () => {
  
  const { user, getUserProfile } = useUserAuth();
  
  
  useEffect(()=>{
    const getuserData = async () =>{

      try{
          const a = await getUserProfile()
          console.log("a",a)
      }catch(e){
          console.log("error",e.message)
      }
    }
    getuserData()
    
  },[])
  
  
  return (
    <>  
    <Container style={{width: "400px"}}>
      <div className="p-4 box mt-3 text-center">
      <h2>Home</h2>
        Hello Welcome <br />
       
        {user && user.displayname}
      </div>
      <div>
     
          </div>
          <br/>
      {/* <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div> */}
      </Container>
    </>
  );
};

export default Home;
