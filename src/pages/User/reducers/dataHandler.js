import * as constants from "../constants";

const resetReduxState = (state) => ({
  ...state,
  cartList: [],
});

export const dataHandlers = {
  [constants.RESET_REDUX_STATES]: resetReduxState,
};
