import { combineReducers } from "redux";

import shopReducer from "../pages/Store/reducers";

export default combineReducers({
  shop: shopReducer,
});
