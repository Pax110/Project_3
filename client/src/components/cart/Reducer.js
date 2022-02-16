import React from "react";

const cartReducer = (state, action) => {
  console.log("action.payload.name",action.payload.name)
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,

        cart: state.cart.filter((c) => c.name !== action.payload.name),
      };
      case "CHANGE_CART_QTY":
        return {
          ...state,
          cart: state.cart.filter((c) =>
            c.name === action.payload.name ? (c.qty = action.payload.qty) : c.qty
          ),
        };
    default:
      return state;
  }
};

export default cartReducer;
