import { Form, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import React, { useState } from "react";

const RestoSignUpForm = () => {
  return (
    <>
      <Container style={{ width: "600px" }}>
        <div className="p-4 box">
          <h2 className="mb-3 text-center">Join Culinary Collective!</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formRestoName">
              <Form.Label>Business Name:</Form.Label>
              <Form.Control type="name" placeholder="Business Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Business Type:</Form.Label>
              <Row>
                <Col>
                  {" "}
                  <Form.Check type="radio" value="home" label="Home Kitchen" />
                </Col>
                <Col>
                  {" "}
                  <Form.Check
                    type="radio"
                    value="commissary"
                    label="Commissary Kitchen"
                  />{" "}
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address:</Form.Label>
              <Form.Control placeholder="1234 Main Street" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2:</Form.Label>
              <Form.Control placeholder="Apartment, Studio, Floor, or Prep Area (if applicable)" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City:</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridProvince">
                <Form.Label>Province or Territory:</Form.Label>
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

              <Form.Group as={Col} controlId="formGridPostalCode">
                <Form.Label>Postal Code:</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Row>
                <Col>
                  <Form.Label>Owner Contact:</Form.Label>
                  <Form.Control type="firstName" placeholder="First Name" />
                </Col>
                <Col>
                  <Form.Label>
                    <br />
                  </Form.Label>
                  <Form.Control type="lastName" placeholder="Last Name" />
                </Col>
              </Row>
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Phone Number:</Form.Label>
                <Form.Control type="phoneNumber" placeholder="Phone Number" />
              </Form.Group>
            </Row>

            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Sign up
              </Button>
            </div>
          </Form>
        </div>
        <div className="p-4 box mt-3 text-center">
          Already have an account? <Link to="/signin">Log In</Link>
        </div>
      </Container>
    </>
  );
};

export default RestoSignUpForm;
