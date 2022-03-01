import React from "react";
import { Button, Container, Form, Card } from "react-bootstrap";
import { Delete } from "@styled-icons/fluentui-system-regular/Delete";
import { ImageAdd } from "@styled-icons/boxicons-solid/ImageAdd";
import { AddImageIcon } from "../icon/AddImageIcon";
const Dessert = ({ register, index }) => {
  // const r = register(`name[${index}]`);
  // console.log("r is",r)
  return (
    <Card
      style={{
        width: "400px",
        backgroundColor: "white",
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
        <Button
          style={{
            backgroundColor: "#feaa00",
            borderColor: "#feaa00",
            padding: "0.25rem",
            margin: "3%",
          }}
        >
          <AddImageIcon style={{ width: "30px", height: "30px" }} />
          Upload Images
        </Button>
        <br />
        <Button
          variant="danger"
          style={{
            padding: "0.25rem",
            margin: "3%",
            top: "50%",
            left: "50%",
          }}
          // onClick={handleDelete}
        >
          <Delete style={{ width: "30px", height: "30px" }} />
          Delete
        </Button>
        <br />

        <br />
      </Card.Body>
    </Card>
  );
};
export default Dessert;
