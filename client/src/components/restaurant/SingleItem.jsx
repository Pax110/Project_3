import { Button, CardMedia, ImageListItemBar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { CartState } from "../context/CartProvider";

const SingleItem = ({ item, restoId, restaurant }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();



  //Resraurant Id to add into item to dispatch into the cart
  item.restoId = restoId;

  //Resraurant Id to add into item to dispatch into the cart
  item.restoName = restaurant.name;

  const myStyle = {
    fontFamily: "Roboto",
    textAlign: "center",
    textDecoration: "none",
    overflow: "visible",
    padding: "3px",
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
        padding={2}
        title={item.name}
        style={myStyle}
        subtitle={
          <span>
            {item.description}
            <br />
            <br />
            Price: ${item.price}
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
          <Button className="silly-button"
            sx={{
              color: "whitesmoke",
              backgroundColor: "#feaa00",
            }}
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
