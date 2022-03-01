import { Form, Container, Row, Col, Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import background from "../landingimage/food1.jpg";
import { collection, setDoc, arrayUnion, doc } from "firebase/firestore";
import { useFirebase } from "../FirebaseProvider";
import { useUserAuth } from "../context/UserAuthContext";
import { DocumentAttach } from "@styled-icons/ionicons-outline/DocumentAttach";

const DriverSignUpForm = () => {
  const { db } = useFirebase();
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postal, setPostal] = useState("");

  const handleClose = () => {
    setShow(false);
    navigate("/");
  };
  const handleShow = () => setShow(true);
  console.log("user is", user);
  useEffect(() => {
    console.log("useEffect");

    const checkSignIn = () => {
      if (!user) {
        setShowSignup(true);
      }
    };
    checkSignIn();
  }, []);

  const addDriverRole = async () => {
    try {
      let collRef = collection(db, "users");
      let docRef = doc(collRef, user.uid);
      await setDoc(
        docRef,
        {
          //add fields here to update content,
          firstName: firstName,
          lastName: lastName,
          address: address,
          city: city,
          province: province,
          postal: postal,
          email: email,
          phone: phone,
          uid: user.uid,
          role: arrayUnion("Driver"),
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
        }}
      >
        <Container
          style={{
            width: "600px",
            backgroundColor: "rgba(225, 229, 235, 0.9)",
          }}
        >
          <div className="p-4 box">
            <h2 className="mb-3 text-center">Join Culinary Collective!</h2>
            <p className="mb-3 text-center">Become A Driver Today </p>
            <p className="mb-3 text-center">
              Please review the fields and update them to match your license{" "}
            </p>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Form.Group className="mb-3" controlId="formBasicName">
                <Row>
                  <Col>
                    <Form.Label>Driver's Given Name</Form.Label>
                    <Form.Control
                      type="firstName"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Surname</Form.Label>
                    <Form.Control
                      type="lastName"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress">
                <Form.Label>Address:</Form.Label>
                <Form.Control
                  placeholder="1234 Main Street"
                  type="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
                <Form.Group>
                  {" "}
                  <Form.Label>
                    Upload your Drivers Abstract and License in .pdf format{" "}
                  </Form.Label>
                  <div className="d-grid gap-4">
                    <Button variant="primary" type="button">
                      <DocumentAttach
                        style={{ width: "30px", height: "30px" }}
                      />
                      &nbsp;&nbsp;Drivers Abstract
                    </Button>
                    <Button variant="primary" type="button">
                      <DocumentAttach
                        style={{ width: "30px", height: "30px" }}
                      />
                      &nbsp;&nbsp;Drivers License
                    </Button>
                  </div>
                </Form.Group>
              </Row>

              <div className="d-grid gap-10">
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => {
                    addDriverRole();
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
                    <Modal.Title>
                      Thank you for your interest to join Culinary Collective.
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>We will get back to you shortly!</Modal.Body>
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
                      }}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
                ;
              </div>
            </Form>
          </div>
          <div className="p-4 box mt-3 text-center">
            Already have an account? <Link to="/signin">Log In</Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DriverSignUpForm;
