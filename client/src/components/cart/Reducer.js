

export const cartReducer = (state, action) => {
  console.log("action.payload......", action.payload);
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }; //this is where I need to set restaurant id but only once for all the other add to cart actions
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
export const itemReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTERS":
      return {  byFastDelivery: false };

    default:
      return state;
  }
};

