import {
  SET_PRODUCT_TO_CART_LIST,
  DELETE_PRODUCT_FROM_CART_LIST,
  CLEAR_CART,
  SET_QUANTITY,
} from "../constants";

export const setProductToCartList = (data) => ({
  type: SET_PRODUCT_TO_CART_LIST,
  payload: data,
});

export const deleteCartItem = (data) => ({
  type: DELETE_PRODUCT_FROM_CART_LIST,
  payload: data,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const setQuantity = (data) => ({
  type: SET_QUANTITY,
  payload: data,
});
