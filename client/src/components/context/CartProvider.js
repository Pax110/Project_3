
import React, { createContext, useContext, useReducer, useState } from "react";
import itemReducer from "../cart/Reducer";
import cartReducer from "../cart/Reducer";


export const CartContext = createContext();

const CartProvider = ({ children }) => {
   

  const [state, dispatch] = useReducer(cartReducer, {
    //   items: items,
    cart: []
  });
  
  const [itemState, itemDispatch] = useReducer(itemReducer, {
    fastDelivery: false,
    dayAheadDelivery: false,
    searchQuery: "",

  })

  return (
    <div>
      <CartContext.Provider value={{ state, dispatch, itemState, itemDispatch }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartProvider;
export const CartState = () => {
  return useContext(CartContext);
};
