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

export const generateQueryParams = (query) => {
  let str = "?";
  for (var xyz in query) {
    if (query[xyz] != null) {
      str = `${str}${xyz}=${query[xyz]}&`;
    }
  }
  str = str.slice(0, -1);
  return str !== "" ? str : null;
};