import { FormControl } from "@mui/material";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/CartProvider";
import Rating from "./Rating";
import "./styles.css";

const Filters = () => {
  const [rate, setRate] = useState(3);
  const {
    itemState: { byAsapDelivery, byBookedDelivery, byRating, bySearchQuery },
    itemDispatch,
  } = CartState();



  return (
    <div className="filters" style={{ height: "300px" }}>
      <span className="title">Filter By:</span>

      <span>
        <Form.Check
          inline
          label="Pre-Order"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            itemDispatch({
              type: "FILTER_BY_BOOKED_DELIVERY",
            })
          }
          checked={byBookedDelivery}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="ASAP Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            itemDispatch({
              type: "FILTER_BY_ASAP_DELIVERY",
            })
          }
          checked={byAsapDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={rate}
          style={{ cursor: "pointer" }}
          onClick={(i) => setRate(i)}
        />
      </span>
      <Button
        style={{ backgroundColor: "#feaa00", borderColor: "#feaa00" }}
        onClick={() =>
          itemDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
