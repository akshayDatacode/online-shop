export const handleTextVisibility = (text, limit) => {
  if (text) {
    return `${text.slice(0, limit)}${text.length > limit ? "..." : ""}`;
  }
};

export const countTotalCartItems = (cartList) => {
  let total = 0;
  cartList &&
    cartList.map((item) => {
      total = total + item.quantity;
    });
  return total;
};
