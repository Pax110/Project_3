import React from 'react'
import { Button, Container, Form } from "react-bootstrap";
const Dessert = ({ register, index }) => {
    // const r = register(`name[${index}]`);
    // console.log("r is",r)
    return (
      <Container
        style={{
          width: "400px",
          backgroundColor: "#feaa00",
        }}
      >
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
        <br />
  
        <br />
      </Container>
    );
  };
export default Dessert