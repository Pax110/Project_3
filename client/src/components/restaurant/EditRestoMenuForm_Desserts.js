import React from "react";
import { Button, Container, Form, Card } from "react-bootstrap";
import { DeleteIcon } from "../icon/DeleteIcon";
import { AddImageIcon } from "../icon/AddImageIcon";
const Dessert = ({ register, index }) => {
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
      <Card.Body>
        <label>Item Name: </label>
        <br />
        <input type="text" {...register(`menu.desserts[${index}].name`)} />
        <br />
        <label>Item Price: </label>
        <br />
        <input type="text" {...register(`menu.desserts[${index}].price`)} />
        <input
          type="hidden"
          {...register(`menu.desserts[${index}].type`)}
          value="desserts"
        />
        <input
          type="hidden"
          {...register(`menu.desserts[${index}].menuphoto`)}
          value="desserts"
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
          Upload Images
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
export default Dessert;
