import axios from "axios";
import { generateQueryParams } from "../../../utility";
import { SET_PRODUCT_TO_CART_LIST_LOADING } from "../constants";

const api = `http://www.localhost:5000/api`;

export const addProduct = (product) => {
  return axios
    .post(`${api}/add_product`, product)
    .then(({ data }) => {
      return { success: true, data };
    })
    .catch((error) => {
      console.log("add product error", error);
    });
};

export const getProducts = (filter) => {
  return axios
    .get(`${api}/fetch_products${generateQueryParams({
      search: filter?.search,
      priceRageStart: filter?.priceRageStart,
      priceRageEnd: filter?.priceRageEnd,
      categoriesList: filter?.categoriesList,
    })}`)
    .then(({ data }) => {
      return { success: true, data };
    })
    .catch((error) => {
      console.log("get products error", error);
    });
};

export const addOrder = (order) => {
  return axios
    .post(`${api}/add_order`, order)
    .then(({ data }) => {
      return { success: true, data };
    })
    .catch((error) => {
      console.log("add order error", error);
    });
};

export const getOrders = () => {
  return axios
    .get(`${api}/get_orders`)
    .then(({ data }) => {
      return { success: true, data };
    })
    .catch((error) => {
      console.log("get orders error", error);
    });
};

export const getProduct = (id) => (dispatch) => {
  return axios
    .get(`${api}/get_product/${id}`)
    .then(({ data }) => {
      return { success: true, data };
    })
    .catch((error) => {
      console.log("get order error", error);
    });
};

export const completeCartOrder = (orderList) => {
  console.log("sdf", orderList)
  return axios
    .post(`${api}/payment/cart_order`, orderList)
    .then(({ data }) => {
      return { success: true, data };
    })
    .catch((error) => {
      console.log("post orderlist error", error);
    })
}