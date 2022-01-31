import React, { useEffect, useState } from "react";
import { useUserAuth } from "./context/UserAuthContext";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { Form, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useFirebase } from "./FirebaseProvider";
import { useForm } from "react-hook-form";


const Profile = () => {
  const { user } = useUserAuth();
  const [userDocument, setUserDocument] = useState(null);
  const { register, setValue } = useForm();
  const { db, auth } = useFirebase();

  

  useEffect(() => {
    const updateUserDoc = async ()=> {

    
    let docRef = doc(db, "users", user.uid);
    console.log(`docRef is ${JSON.stringify(docRef)}`);
    const a = await setDoc(docRef, {
      firstName: 'namex',
      lastName: 'nameY'
    })

  }
  updateUserDoc()
  }, []);

  return (
    <>
   
      <p>{JSON.stringify(userDocument)}</p>
      <Container style={{ width: "400px" }}>
        <div className="p-4 box">
          <h2 className="mb-3"> Profile</h2>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                disabled

                // onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="First Name"

                // onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Last Name"

                // onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Address"

                // onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="City"

                // onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Postal Code"

                // onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Province"

                // onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="number"
                placeholder="Phone Number"

                // onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"

                // onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Container>
      
    </>
  );
};

export default Profile;

// import React from 'react';
// import {useUserAuth} from './context/UserAuthContext'
// function Profile() {
//     const {user} = useUserAuth()
//     console.log("user",user);
//   return <div>Profile</div>
// }

// export default Profile;
