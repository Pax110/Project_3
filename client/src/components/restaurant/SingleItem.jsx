import { Button } from "@mui/material";
import React from "react";

const SingleItem = ({ item }) => {
  const handleCart = () => {
    console.log("added to cart");
  };

  return (
    <>
      <div>{item.name}</div>
      <div>{item.price}</div>
      <Button onClick={handleCart}>Add to Cart</Button>
    </>
  );
};

export default SingleItem;
