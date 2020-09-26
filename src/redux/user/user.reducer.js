import { UserActionTypes } from "./user.types";

//initial state
const INITAIL_STATE = {
  //null is a value
  currentUser: null,
};

// whenever the state is undefined it equals to "Default value"
const userReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        //retun new obj
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
