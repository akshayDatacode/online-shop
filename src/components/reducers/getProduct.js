import * as constants from "../constants";

const setProductToCartList = (state, action) => {
  const cartRef = state && state.cartList;
  cartRef && cartRef.push(action.payload);
  return {
    ...state,
    cartList: cartRef,
  };
};

const deleteProductFromCartList = (state, action) => {
  const cartRef = state && state.cartList;
  const data = cartRef.filter((item) => item !== action.payload);
  return {
    ...state,
    cartList: data,
  };
};

export const getShopHandlers = {
  [constants.SET_PRODUCT_TO_CART_LIST]: setProductToCartList,
  [constants.DELETE_PRODUCT_FROM_CART_LIST]: deleteProductFromCartList,
};
