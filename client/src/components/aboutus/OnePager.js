import { Button } from "@mui/material";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

function OnePager() {
  return (
    <Container
      style={{
        width: "60%",
        backgroundColor: "#f7f4ef",
        borderRadius: "15px",
        paddingBottom: "20px",
        maxWidth: "none",
        marginLeft: "30px",
      }}
    >
      <h1 className="p-4 box mt-3 text-center">About Culinary Collective</h1>

      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <Button
          variant="primary"
          style={{
            backgroundColor: "#feaa00",
            borderColor: "#feaa00",
            padding: "0.25rem",
            margin: "1%",
          }}
        >
          Back
        </Button>
      </Link>
    </Container>
  );
}

export default OnePager;
