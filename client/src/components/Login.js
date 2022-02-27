import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "./context/UserAuthContext";
import { createUserDocument } from "./user";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const myStyle = {
    fontFamily: "Bebas Neue",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const resp = await googleSignIn();
      const user = resp.user;
      await createUserDocument(user);

      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Container style={{ width: "400px" }}>
        <div className="p-4 box">
          <h1 className="text-center" style={myStyle}>
            Sign In
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
                Log In
              </Button>
            </div>
          </Form>
          <hr />
          <div>
            <GoogleButton
              className="g-btn"
              type="light"
              style={{ margin: "0 auto" }}
              onClick={handleGoogleSignIn}
            />
          </div>
        </div>

        <div className="pb-4 box text-center">
          <Link to="/forgot-password">
            Forgot password? <br />
          </Link>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </Container>
    </>
  );
};

export default Login;
