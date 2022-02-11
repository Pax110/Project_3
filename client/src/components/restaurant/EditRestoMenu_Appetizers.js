import React from 'react'
import { Button, Container, Form } from "react-bootstrap";

const Appetizer = ({ register, index }) => {
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
        <input type="text" {...register(`menu.appetizers[${index}].name`)} />
        <br />
        <label>Item Price: </label>
        <br />
        <input type="text" {...register(`menu.appetizers[${index}].price`)} />
        <input
          type="hidden"
          {...register(`menu.appetizers[${index}].type`)}
          value="appetizers"
        />
         <input
          type="hidden"
          {...register(`menu.appetizers[${index}].menuphoto`)}
          value="appetizers"
        /><br/>
        <Button>upload image</Button><br/>
        <Button>delete</Button><br/>
        
        <br />
  
        <br />
      </Container>
    );
  };

export default Appetizer