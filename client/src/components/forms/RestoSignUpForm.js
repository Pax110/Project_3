import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import background from "../landingimage/food1.jpg";
import { collection, addDoc } from "firebase/firestore";
import { useFirebase } from "../FirebaseProvider";

const RestoSignUpForm = () => {
  const { db } = useFirebase();

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
      });
      console.log("success!");
      setResto("");
      setType("");
      setAddress1("");
      setAddress2("");
      setCity("");
      setProvince("");
      setPostal("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
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
            <Form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Form.Group className="mb-3" controlId="formRestoName">
                <Form.Label>Business Name:</Form.Label>
                <Form.Control
                  type="name"
                  value={resto}
                  placeholder="Business Name"
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
              <Form.Group
                className="mb-3"
                controlId="formGridAddress1"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              >
                <Form.Label>Address:</Form.Label>
                <Form.Control placeholder="1234 Main Street" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formGridAddress2"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              >
                <Form.Label>Address 2:</Form.Label>
                <Form.Control placeholder="Apartment, Studio, Floor, or Prep Area (if applicable)" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  controlId="formGridCity"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <Form.Label>City:</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group
                  as={Col}
                  controlId="formGridProvince"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                >
                  <Form.Label>Province/Territory:</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
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

                <Form.Group
                  as={Col}
                  controlId="formGridPostalCode"
                  value={postal}
                  onChange={(e) => setPostal(e.target.value)}
                >
                  <Form.Label>Postal Code:</Form.Label>
                  <Form.Control />
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
                <Form.Group
                  as={Col}
                  controlId="formGridEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                >
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group
                  as={Col}
                  controlId="formGridPhoneNumber"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                >
                  <Form.Label>Phone Number:</Form.Label>
                  <Form.Control type="phoneNumber" placeholder="Phone Number" />
                </Form.Group>
              </Row>

              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  type="Submit"
                  onClick={() => {
                    console.log("clicked");
                    addResto();
                  }}
                >
                  Sign up
                </Button>
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

export default RestoSignUpForm;
