import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { useFirebase } from "./FirebaseProvider";

export default function ForgotPassword() {
  const emailRef = useRef();

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { db, auth } = useFirebase();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const email = emailRef.current.value;
      console.log("emailRef.current.value", email);
      setMessage("");
      setError("");
      setLoading(true);
      await sendPasswordResetEmail(auth, emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
      <Container style={{ width: "400px" }}>
        <div className="p-4 box">
          <h2 className="mb-3">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <br />
            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/signin">Login</Link>
          </div>

          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </Container>
    </>
  );
}
