import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const EditRestoMenuForm = (props) => {
  const docValue = props.document;
  const id = props.id;
    const [itemName, setItemName] = useState(null)
    const [itemPrice,setItemPrice]= useState(null)
  return (
    <div>
      <h3>EditRestoMenuForm</h3>
      <h3>Menu</h3>
      <div>Appetizer</div>
      <Container
        style={{
          width: "400px",
          backgroundColor: "#feaa00",
        }}
      >
        <label>Item Name: </label>
        <br />
        <input
          type="text"
          defaultValue={docValue.menu.appetizers[0].name}
          value={itemName}
          onChange={(e)=>{setItemName(e.target.value)}}
        />
        <br />
        <label>Item Price: </label>
        <br />
        <input
          type="text"
          defaultValue={docValue.menu.appetizers[0].price}
          value={itemPrice}
          onChange={(e)=>{setItemPrice(e.target.value)}}
        />
        <br />
        <input type="submit" />
        <br />
      </Container>
    </div>
  );
};

export default EditRestoMenuForm;
