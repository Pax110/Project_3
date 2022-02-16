import { Button, CardMedia, ImageListItemBar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { CartState } from "../context/CartProvider";

const SingleItem = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log("cart", cart);

  const myStyle = {
    fontFamily: "Montserrat",
    textAlign: "center",
    textDecoration: "none",
  };
  return (
    <>
      <CardMedia
        component="img"
        height="250"
        src={`${item.menuphoto}`}
        srcSet={`${item.menuphoto}`}
        alt={item.name}
        loading="lazy"
      />

      <ImageListItemBar
        title={item.name}
        style={myStyle}
        subtitle={
          <span>
            Price: ${item.price} <br />
            {item.description}
          </span>
        }
        position="below"
      />

      {cart.some((p) => p.name === item.name) ? (
        <Box textAlign="center">
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
        </Box>
      ) : (
        <Box textAlign="center">
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
        </Box>
      )}
    </>
  );
};

export default SingleItem;
