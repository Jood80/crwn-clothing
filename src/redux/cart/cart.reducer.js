import CartActionsType from "./cart.types";

const INTIAL_STATE = {
  hidden: true,
};

const CartReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case CartActionsType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};
