import { Form, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React from "react";

const RestoSignUpForm = () => {
  return (
    <>
      <Container style={{ width: "400px" }}>
        <div className="p-4 box">
          <h2 className="mb-3"> Restaurant </h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Sign up
              </Button>
            </div>
          </Form>
        </div>
        <div className="p-4 box mt-3 text-center">Already have an account?</div>
      </Container>
    </>
  );
};

export default RestoSignUpForm;
