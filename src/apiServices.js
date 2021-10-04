import axios from "axios";
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

export const getProducts = () => {
  return axios
    .get(`${api}/fetch_products`)
    .then(({ data }) => {
      return { success: true, data };
    })
    .catch((error) => {
      console.log("get products error", error);
    });
};
