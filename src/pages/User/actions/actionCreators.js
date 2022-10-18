import { SET_LOGIN_USER, SET_LOGOUT_USER, SET_SIGNUP_USER } from "../constants";

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

export const setLogoutUser = (data) => ({
  type: SET_LOGOUT_USER,
  payload: data,
});