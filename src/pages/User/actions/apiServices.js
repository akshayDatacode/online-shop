import axios from "axios";
import { generateQueryParams } from "../../../utility";
import { SET_SIGNUP_USER_LOADING } from "../constants";

const baseURL = `http://www.localhost:5000/api`;

export const signupUser = (data) => (dispatch) => {
  dispatch({ type: SET_SIGNUP_USER_LOADING })
  return axios
    .post(`${baseURL}/user/signup`, data)
    .then((res) => {
      if (res.status === 200) {
        dispatch({ type: SET_SIGNUP_USER_LOADING })
        localStorage.setItem('user', res.data);
        return { success: true, data: res };
      } else {
        return { success: false, data: res };
      }
    })
    .catch((error) => {
      dispatch({ type: SET_SIGNUP_USER_LOADING })
      console.log("user signup Error", error);
      return { success: false, error: error };
    });
};