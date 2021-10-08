import * as constants from "../constants";

const setProductToCartList = (state, action) => {
  // const cartRef = state && state.cartList;
  const cartRef = [...state.cartList];
  let existedProductIndex = cartRef.findIndex(
    (e) => e.key === action.payload.key
  );
  if (existedProductIndex !== -1) {
    cartRef[existedProductIndex].quantity += +action.payload?.quantity;
  } else {
    cartRef.push(action.payload);
  }
  return {
    ...state,
    cartList: cartRef,
  };
};

const clearCart = (state, action) => ({
  ...state,
  cartList: [],
});

const deleteProductFromCartList = (state, action) => {
  const cartRef = state && state.cartList;
  const data = cartRef.filter((item) => item !== action.payload);
  return {
    ...state,
    cartList: data,
  };
};

const setQuantity = (state, action) => {
  const cartRef = [...state.cartList];
  let existedProductIndex = cartRef.findIndex(
    (e) => e.key === action.payload.id
  );
  if (existedProductIndex !== -1) {
    cartRef[existedProductIndex].quantity = +action.payload?.qty;
  }
  return {
    ...state,
    cartList: cartRef,
  };
};

export const getShopHandlers = {
  [constants.SET_PRODUCT_TO_CART_LIST]: setProductToCartList,
  [constants.DELETE_PRODUCT_FROM_CART_LIST]: deleteProductFromCartList,
  [constants.CLEAR_CART]: clearCart,
  [constants.SET_QUANTITY]: setQuantity,
};
