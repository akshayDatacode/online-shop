import { SET_LOGIN_USER, SET_LOGOUT_USER, SET_SIGNUP_USER, SET_AUTH_ERROR } from "../constants";

export const setSignupUser = (data) => ({
  type: SET_SIGNUP_USER,
  payload: data,
});

export const setLoginUser = (data) => {
  return {
    type: SET_LOGIN_USER,
    payload: data,
  }
};

export const setAuthError = (data) => {
  return {
    type: SET_AUTH_ERROR,
    payload: data,
  }
};

export const setLogoutUser = () => ({
  type: SET_LOGOUT_USER,
});