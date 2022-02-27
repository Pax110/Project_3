import React from "react";
import { Button } from "react-bootstrap";
import Map from "../map/Map";
import { Link } from "react-router-dom";

const DriverDash = () => {
  return (
    <>
      <div>DriverDash</div>
      <div>Google map Api </div>
      <Link to="/driver/orders">
        <Button>View Orders</Button>
      </Link>

      <Map />
    </>
  );
};

export default DriverDash;
