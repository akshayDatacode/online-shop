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
  return {
    ...state,
    currentUser: jwtDecode(action.payload)
  }
};

const logoutUser = (state, action) => {
  localStorage.setItem('token', null);
  return {
    ...state,
    currentUser: {}
  }
};

export const dataHandlers = {
  [constants.SET_SIGNUP_USER]: signupUser,
  [constants.SET_LOGIN_USER]: loginUser,
  [constants.SET_LOGOUT_USER]: logoutUser,
};
