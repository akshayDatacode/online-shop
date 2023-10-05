import { loadinghandlers } from "./loadinghandler";
import { createReducer } from "../../../core/reduxUtils";
import { dataHandlers } from "./dataHandler";

const initialState = {
  signupUserLoading: false,
  loginUserLoading: false,
  currentUser: {},
  authError: ''
};

const handlers = {
  ...loadinghandlers,
  ...dataHandlers,
};

const userReducer = createReducer(initialState, handlers);

export default userReducer;
