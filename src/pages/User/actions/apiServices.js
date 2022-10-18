import axios from "axios";
import * as actions from './actionCreators'
import { generateQueryParams } from "../../../utility";
import { SET_SIGNUP_USER_LOADING, SET_LOGIN_USER_LOADING } from "../constants";

const baseURL = `http://www.localhost:5000/api`;

export const signupUser = (data) => (dispatch) => {
  dispatch({ type: SET_SIGNUP_USER_LOADING })
  return axios
    .post(`${baseURL}/user/signup`, data)
    .then((res) => {
      if (res.status === 201) {
        dispatch({ type: SET_SIGNUP_USER_LOADING })
        dispatch(actions.setSignupUser(res.data.token))
        return { success: true, res: res };
      } else {
        return { success: false, res: res };
      }
    })
    .catch((error) => {
      dispatch({ type: SET_SIGNUP_USER_LOADING })
      console.log("user signup Error", error);
      return { success: false, error: error };
    });
};

export const loginUser = (data) => (dispatch) => {
  dispatch({ type: SET_LOGIN_USER_LOADING })
  return axios
    .post(`${baseURL}/user/login`, data)
    .then((res) => {
      if (res.status === 201) {
        dispatch({ type: SET_LOGIN_USER_LOADING })
        dispatch(actions.setLoginUser(res.data.token))
        return { success: true, res: res };
      } else {
        return { success: false, res: res };
      }
    })
    .catch((error) => {
      dispatch({ type: SET_LOGIN_USER_LOADING })
      console.log("user login Error", error);
      return { success: false, error: error };
    });
};