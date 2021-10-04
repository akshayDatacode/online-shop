import { getShopHandlers } from "./getProduct";
import { createReducer } from "../../core/reduxUtils";

const initialState = {
  cartList: [],
};

const handlers = {
  ...getShopHandlers,
};

const shopReducer = createReducer(initialState, handlers);

export default shopReducer;
