import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "./context/UserAuthContext";
import { createUserDocument } from "./user";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();
  const myStyle = {
    fontFamily: "Bebas Neue",
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const resp = await signUp(email, password);

      const user = resp.user;

      await createUserDocument(user);

      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Container style={{ width: "400px" }}>
        <div className="p-4 box">
          <h1 className="text-center" style={myStyle}>
            Sign Up
          </h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Sign up
              </Button>
            </div>
          </Form>
        </div>
        <div className="p-4 box text-center">
          Already have an account? <Link to="/signin">Sign In</Link>
        </div>
      </Container>
    </>
  );
};

export default Signup;
