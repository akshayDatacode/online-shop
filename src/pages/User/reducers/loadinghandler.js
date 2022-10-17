import * as constants from "../constants";

const loginUserLoading = (state) => {
  return {
    ...state,
    loginUserLoading: !state.loginUserLoading,
  }
};

const signupUserLoading = (state) => {
  return {
    ...state,
    signupUserLoading: !state.signupUserLoading,
  }
};

export const loadinghandlers = {
  [constants.SET_SIGNUP_USER_LOADING]: signupUserLoading,
  [constants.SET_LOGIN_USER_LOADING]: loginUserLoading,
};
