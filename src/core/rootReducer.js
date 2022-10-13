import { combineReducers } from "redux";

import shopReducer from "../pages/Store/reducers";
import userReducer from "../pages/User/reducers";

export default combineReducers({
  shop: shopReducer,
  user: userReducer,
});
