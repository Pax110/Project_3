import { Button } from "@mui/material";
import React from "react";
import { CartState } from "../context/CartProvider";

const SingleItem = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();


  console.log("cart",cart)
  return (
    <>
      <div>{item.name}</div>
      <div>{item.price}</div>
      {cart.some((p) => p.name === item.name) ? (
        <Button
          variant="danger"
          onClick={() => {
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: item,
            });
          }}
        >
          Remove From Cart
        </Button>
      ) : (
        <Button
          onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              payload: item,
            });
          }}
        >
          Add to Cart
        </Button>
      )}
    </>
  );
};

export default SingleItem;
