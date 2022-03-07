import React from "react";
import { Button, Container, Form, Card } from "react-bootstrap";
import { DeleteIcon } from "../icon/DeleteIcon";
import { AddImageIcon } from "../icon/AddImageIcon";

const Main = ({ register, index }) => {
  // const r = register(`name[${index}]`);
  // console.log("r is",r)
  return (
    <Card
      style={{
        width: "400px",
        backgroundColor: "#f7f4ef",
        display: "inline-block",
        padding: "3%",
        margin: "2.5%",
        justifyContent: "center",
      }}
    >
      <Card.Body style={{ justifyContent: "center" }}>
        <label>Item Name: </label>
        <br />
        <input type="text" {...register(`menu.mains[${index}].name`)} />
        <br />
        <label>Item Price: </label>
        <br />
        <input type="text" {...register(`menu.mains[${index}].price`)} />
        <input
          type="hidden"
          {...register(`menu.mains[${index}].type`)}
          value="mains"
        />
        <input
          type="hidden"
          {...register(`menu.mains[${index}].menuphoto`)}
          value="mains"
        />
      </Card.Body>
      <div style={{ display: "inline" }}>
        <Button
          style={{
            backgroundColor: "#feaa00",
            borderColor: "#feaa00",
            padding: "0.25rem",
          }}
        >
          <AddImageIcon style={{ width: "30px", height: "30px" }} />
          &nbsp;&nbsp;Upload Images
        </Button>
        &nbsp;&nbsp;
        <Button
          variant="danger"
          style={{
            padding: "0.25rem",
          }}
          // onClick={handleDelete}
        >
          <DeleteIcon style={{ width: "30px", height: "30px" }} />
          &nbsp;&nbsp;Delete
        </Button>
      </div>
    </Card>
  );
};

export default Main;
