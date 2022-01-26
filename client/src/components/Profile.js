import React, { useEffect, useState } from 'react';
import {useUserAuth} from './context/UserAuthContext'
import {doc, collection, onSnapshot} from 'firebase/firestore'
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {db} from './firebase'
import {useForm} from 'react-hook-form'

const Profile = () => {
    const {user} = useUserAuth()
    const [userDocument, setUserDocument] = useState(null)
    const {register, setValue} = useForm()

  
  useEffect(() => {
    let docRef = doc(db, "users", user.uid);
    console.log(`docRef is ${JSON.stringify(docRef)}`);
    const unsub = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        const documentData = doc.data();
        console.log('documentData is', documentData)
        setUserDocument(documentData)
        const formData = Object.entries(documentData).map((entry) => ({
          [entry[0]]: entry[1],
        }))
        console.log("form Data", formData);
        setValue(formData)
      } else {
        console.log(`onSnapshot() : doc.exists is FALSE`);
      }
    });
  
    return unsub;
  }, [user.uid, setValue]);
  if(!userDocument){
    console.log("no user document");
    return null 
  }
  return (
    <>
    <p>{JSON.stringify(userDocument)}</p>
    <Container style={{width: "400px"}}>
      <div className="p-4 box">
        <h2 className="mb-3"> Profile</h2>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}
        <Form >
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
  )
}

export default Profile;









// import React from 'react';
// import {useUserAuth} from './context/UserAuthContext'
// function Profile() {
//     const {user} = useUserAuth()
//     console.log("user",user);
//   return <div>Profile</div>
// }

// export default Profile;



