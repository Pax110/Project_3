import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import RestoSelectMenu from "../components/restaurant/RestoSelectMenu";

//Need to add id and key to links

const RestoDashboardPage = () => {
  return (
    <div>
      <RestoSelectMenu />
      <Link to="/restaurants/editprofile/">
        <Button variant="primary" style={{ backgroundColor: "#feaa00", borderColor: "#feaa00" }}>
          Account Details
        </Button>
      </Link>
      <Link to="/restaurants/editmenu/">
        <Button variant="primary" style={{ backgroundColor: "#feaa00", borderColor: "#feaa00" }}>
          Menu Details
        </Button>
      </Link>
      <h1> Hi I am the dashboard</h1>
    </div>
  );
};

export default RestoDashboardPage;
