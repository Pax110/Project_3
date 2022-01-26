import React, { useEffect, useState } from "react";
import { useUserAuth } from "./context/UserAuthContext";
import { doc, collection, onSnapshot } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { db } from "./firebase";
import { useForm } from "react-hook-form";

const ProfileTest = () => {
  const { user } = useUserAuth();
  const [userDocument, setUserdocument] = useState(null);

  useEffect(() => {
    let collRef = collection(db, "users");
    let docRef = doc(collRef, user.uid);
    console.log("{JSON.stringify(docRef)}", JSON.stringify(docRef));
    const unsub = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        const documentData = doc.data();
        console.log("documentData", documentData);
        setUserdocument(documentData);
        const formData = Object.entries(documentData).map((entry) => ({
            [entry[0]]: entry[1],
          }))
          console.log("form Data", formData);
      }
    });

    return unsub;
  }, []);

  if (!userDocument) {
    return null;
  }

  return (
    <>
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

export default ProfileTest;
