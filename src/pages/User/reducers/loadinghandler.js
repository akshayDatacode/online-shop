import * as constants from "../constants";

const signupUserLoading = (state) => ({
  ...state,
  signupUserLoading: !state.signupUserLoading,
});

export const loadinghandlers = {
  [constants.SET_SIGNUP_USER_LOADING]: signupUserLoading,
};
