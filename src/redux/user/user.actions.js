export const setCurrentUser = (user) => ({
  // this action type must be the same as the reducer's type 
  type: "SET_CURRENT_USER",
  payload: user,
});
