import React, { useEffect, useState } from "react";
import { useUserAuth } from "./context/UserAuthContext";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { Form, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useFirebase } from "./FirebaseProvider";
import { set, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";

const Profile = () => {
  const { user } = useUserAuth();
  const { db, auth } = useFirebase();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  // placeholder hooks
  const [tempFirstName, setTempFirstName] = useState("");
  const [tempLastName, setTempLastName] = useState("");
  const [tempAddress, setTempAddress] = useState("");
  const [tempPhone, setTempPhone] = useState("");

  const myStyle = {
    fontFamily: "Bebas Neue",
  };

  useEffect(() => {
    let collRef = collection(db, "users");
    let docRef = doc(collRef, user.uid);
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists) {
        const receivedData = doc.data();
        console.log("DOCUMENT DATA name", receivedData.firstName);
        setTempFirstName(receivedData.firstName);
        setTempLastName(receivedData.lastName);
        setTempAddress(receivedData.address);
        setTempPhone(receivedData.phone);
      }
    });
    return unsubscribe;
  }, []);

  const addProfileInfo = async () => {
    try {
      let collRef = collection(db, "users");
      let docRef = doc(collRef, user.uid);
      await setDoc(
        docRef,
        {
          firstName: firstName,
          lastName: lastName,
          address: address,
          phone: phone,
        },
        { merge: true }
      );
      setFirstName("");
      setLastName("");
      setAddress("");
      navigate("/");
    } catch (e) {
      console.log("Error", e.message);
    }

    // useEffect(() => {
    //   const updateUserDoc = async ()=> {

    //   let docRef = doc(db, "users", user.uid);
    //   console.log(`docRef is ${JSON.stringify(docRef)}`);
    //   const a = await setDoc(docRef, {
    //     firstName: 'namex',
    //     lastName: 'nameY'
    //   })

    // }
    // updateUserDoc()
    // }, []);
  };

  return (
    <>
      {/* <p>{JSON.stringify(userDocument)}</p> */}
      <Container>
        <div className="p-4 box">
          <h1 className="text-center" style={myStyle}>
            Profile
          </h1>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email address"
                defaultValue={user.email}
                disabled

                // onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder={tempFirstName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={lastName}
                placeholder={tempLastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                value={address}
                placeholder={tempAddress}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone#</Form.Label>
              <Form.Control
                type="text"
                placeholder={tempPhone}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
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
                type="password"
                placeholder="Password"

                // onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group> */}

            <div className="d-grid gap-2">
              <Button
                variant="primary"
                type="Submit"
                style={{
                  backgroundColor: "#feaa00",
                  borderColor: "#feaa00",
                  padding: "0.25rem",
                  margin: "1%",
                }}
                onClick={() => {
                  addProfileInfo();
                }}
              >
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
