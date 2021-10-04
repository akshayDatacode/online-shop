import { combineReducers } from "redux";

import shopReducer from "../components/reducers";

export default combineReducers({
  shop: shopReducer,
});
