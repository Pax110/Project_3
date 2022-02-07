import React, { createContext, useContext, useReducer } from 'react';
import cartReducer from '../Reducer';

export const CartContext = createContext()

const CartProvider = ({children}) => {
      const [state, dispatch] = useReducer(cartReducer, {
          cart: []
      })
  return <div>
      <CartContext.Provider value={{state, dispatch}}>
            {children}
      </CartContext.Provider>
  </div>;
    
}


export default CartProvider
export const CartState = () => {
    return useContext(CartContext)
}