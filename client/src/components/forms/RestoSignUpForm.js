import { Form, Container, Row, Col, Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import background from "../landingimage/wood.jpg";
import {
  collection,
  addDoc,
  updateDoc,
  arrayUnion,
  doc,
} from "firebase/firestore";
import { useFirebase } from "../FirebaseProvider";
import { useUserAuth } from "../context/UserAuthContext";

const RestoSignUpForm = () => {
  const { db } = useFirebase();
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  const myStyle = {
    fontFamily: "Bebas Neue",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "40px",
    margin: "0",
  };

  const [resto, setResto] = useState("");
  const [type, setType] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postal, setPostal] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [show, setShow] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log("useEffect");

    const checkSignIn = () => {
      if (!user) {
        setShowSignup(true);
      }
    };
    checkSignIn();
  }, []);

  const handleClose = () => {
    setShowSignup(false);
    navigate("/");
  };

  const handleShow = () => setShow(true);

  const addResto = async () => {
    try {
      let collectionRef = collection(db, "restaurants");
      await addDoc(collectionRef, {
        name: resto,
        type: type,
        contact: {
          address: address1,
          address2: address2,
          city: city,
          province: province,
          postal: postal,
          owner: { firstName: firstName, lastName: lastName },
          email: email,
          phoneNumber: phone,
        },
        ownerUid: user.uid,
      });
      console.log("Create business success!");
    } catch (ex) {
      console.log("FIRESTORE ADD FAILURE!", ex.message);
    }
  };

  const addRole = async () => {
    try {
      let collRef = collection(db, "users");
      let docRef = doc(collRef, user.uid);
      await updateDoc(
        docRef,
        {
          uid: user.uid,
          role: arrayUnion("Business"),
        },

        { merge: true }
      );
      console.log("Add role success!");
    } catch (ex) {
      console.log("FIRESTORE ADD FAILURE!", ex.message);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "20px",
        }}
      >
        <Container
          style={{
            width: "600px",
            backgroundColor: "rgba(225, 229, 235, 0.9)",
          }}
        >
          <div className="p-4 box">
            <h2 className="text-center" style={myStyle}>
              Join Culinary Collective!
            </h2>
            <p className="mb-3 text-center">Grow Your Business Today</p>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Form.Group className="mb-3" controlId="formRestoName">
                <Form.Label>Business Name:</Form.Label>
                <Form.Control
                  placeholder="Business Name"
                  type="name"
                  value={resto}
                  onChange={(e) => setResto(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Business Type:</Form.Label>
                <Row>
                  <Col>
                    {" "}
                    <Form.Check
                      type="radio"
                      value="Home"
                      checked={type === "Home"}
                      label="Home Kitchen"
                      onChange={(e) => setType(e.target.value)}
                    />
                  </Col>
                  <Col>
                    {" "}
                    <Form.Check
                      type="radio"
                      value="Commissary"
                      checked={type === "Commissary"}
                      label="Commissary Kitchen"
                      onChange={(e) => setType(e.target.value)}
                    />{" "}
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address:</Form.Label>
                <Form.Control
                  placeholder="1234 Main Street"
                  type="address"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2:</Form.Label>
                <Form.Control
                  placeholder="Apartment, Studio, Floor, or Prep Area (if applicable)"
                  type="address2"
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City:</Form.Label>
                  <Form.Control
                    type="city"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridProvince">
                  <Form.Label>Province/Territory:</Form.Label>
                  <Form.Select
                    // defaultValue="Choose..."
                    type="province"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                  >
                    <option value="Choose...">Choose...</option>
                    <option value="Alberta">Alberta</option>
                    <option value="British Columbia">British Columbia</option>
                    <option value="Manitoba">Manitoba</option>
                    <option value="New Brunswick">New Brunswick</option>
                    <option value="Newfoundland and Labrador">
                      Newfoundland and Labrador
                    </option>
                    <option value="Northwest Territories">
                      Northwest Territories
                    </option>
                    <option value="Nova Scotia">Nova Scotia</option>
                    <option value="Nunavut">Nunavut</option>
                    <option value="Ontario">Ontario</option>
                    <option value="Prince Edward Island">
                      Prince Edward Island
                    </option>
                    <option value="Quebec">Quebec</option>
                    <option value="Saskatchewan">Saskatchewan</option>
                    <option value="Yukon">Yukon</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPostalCode">
                  <Form.Label>Postal Code:</Form.Label>
                  <Form.Control
                    type="postal"
                    placeholder="Postal Code"
                    value={postal}
                    onChange={(e) => setPostal(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicName">
                <Row>
                  <Col>
                    <Form.Label>Owner Contact:</Form.Label>
                    <Form.Control
                      type="firstName"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Label>
                      <br />
                    </Form.Label>
                    <Form.Control
                      type="lastName"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPhoneNumber">
                  <Form.Label>Phone Number:</Form.Label>
                  <Form.Control
                    placeholder="Phone Number"
                    type="phoneNumber"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => {
                    addResto();
                    addRole();
                    handleShow();
                  }}
                >
                  Sign up
                </Button>
                <Modal
                  show={show}
                  onHide={handleClose}
                  keyboard={false}
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Welcome to the Collective!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Sign in and head on over to the Restaurant Dashboard to get
                    cookin'! 🚚🍴
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="success"
                      onClick={() => {
                        handleClose();
                        logOut();
                      }}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Modal
                  show={showSignup}
                  onHide={handleClose}
                  keyboard={false}
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Thank you for your interest to join Culinary Collective.
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Please sign up and try again!</Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="success"
                      onClick={() => {
                        handleClose();
                        navigate("/signup");
                      }}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </Form>
          </div>
          <div className="p-4 box text-center">
            Already have an account? <Link to="/signin">Log In</Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default RestoSignUpForm;
