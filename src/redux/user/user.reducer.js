//initial state
const INITAIL_STATE = {
  //null is a value
  currentUser: null,
};

// whenever the state is undefined "Default value"
const userReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
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
