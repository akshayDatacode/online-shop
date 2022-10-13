import { loadinghandlers } from "./loadinghandler";
import { createReducer } from "../../../core/reduxUtils";

const initialState = {
  signupUserLoading: false
};

const handlers = {
  ...loadinghandlers,
};

const userReducer = createReducer(initialState, handlers);

export default userReducer;
