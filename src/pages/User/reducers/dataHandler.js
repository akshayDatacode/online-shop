import * as constants from "../constants";
import jwtDecode from "jwt-decode";

const signupUser = (state, action) => {
  localStorage.setItem('token', action.payload);
  jwtDecode(action.payload)
  return {
    ...state,
    currentUser: action.payload
  }
};

const loginUser = (state, action) => {
  localStorage.setItem('token', action.payload);
  jwtDecode(action.payload)
  console.log(jwtDecode(action.payload))
  return {
    ...state,
    currentUser: jwtDecode(action.payload)
  }
};

export const dataHandlers = {
  [constants.SET_SIGNUP_USER]: signupUser,
  [constants.SET_LOGIN_USER]: loginUser,
};
