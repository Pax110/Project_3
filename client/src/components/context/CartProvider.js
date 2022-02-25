import React, { createContext, useContext, useReducer, useState } from "react";
import { cartReducer } from "../cart/Reducer";
import { itemReducer } from "../cart/Reducer";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  const [itemState, itemDispatch] = useReducer(itemReducer, {
    byAsapDelivery: false,
    byBookedDelivery: false,
    byRating: 0,
    bySearchQuery: "",
  });

  return (
    <div>
      <CartContext.Provider
        value={{ state, dispatch, itemState, itemDispatch }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartProvider;
export const CartState = () => {
  return useContext(CartContext);
};
