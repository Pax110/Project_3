import { doc, getDoc } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import cartReducer from "../cart/Reducer";
import { userAuthContext } from "./UserAuthContext";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
   

  const [state, dispatch] = useReducer(cartReducer, {
    //   items: items,
    cart: []
  });
  

  return (
    <div>
      <CartContext.Provider value={{ state, dispatch }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartProvider;
export const CartState = () => {
  return useContext(CartContext);
};
