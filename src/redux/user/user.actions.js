import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  // this action type must be the same as the reducer's type
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
