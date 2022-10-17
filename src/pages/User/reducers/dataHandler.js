import * as constants from "../constants";
import jwtDecode from "jwt-decode";

const signupUser = (state, action) => {
  debugger
  localStorage.setItem('token', action.payload);
  return {
    ...state,
    currentUser: action.payload
  }
};

const loginUser = (state, action) => {
  debugger
  localStorage.setItem('token', action.payload);
  return {
    ...state,
    currentUser: action.payload
  }
};

export const dataHandlers = {
  [constants.SET_SIGNUP_USER]: signupUser,
  [constants.SET_LOGIN_USER]: loginUser,
};
