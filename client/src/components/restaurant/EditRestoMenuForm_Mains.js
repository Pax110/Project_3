import React from 'react'
import { Button, Container, Form } from "react-bootstrap";

const Main = ({ register, index }) => {
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
        <br />
  
        <br />
      </Container>
    );
  };

export default Main