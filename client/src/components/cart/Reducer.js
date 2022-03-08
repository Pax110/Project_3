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
    case "RESET_CART":
      console.log("trying to reset cart");
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
export const itemReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_SEARCH":
      return { ...state, bySearchQuery: action.payload };
    case "FILTER_BY_BOOKED_DELIVERY":
      return { ...state, byBookedDelivery: !state.byBookedDelivery };
    case "FILTER_BY_ASAP_DELIVERY":
      return { ...state, byAsapDelivery: !state.byAsapDelivery };
    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
    case "CLEAR_FILTERS":
      return {
        byAsapDelivery: false,
        byBookedDelivery: false,
        byRating: 0,
        bySearchQuery: "",
      };

    default:
      return state;
  }
};
