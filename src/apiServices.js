import axios from "axios";
const api = `http://www.localhost:5000/api`;

export const addProduct = (product) => {
  return axios
    .post(`${api}/api/add_product`, product)
    .then(({ data }) => {
      debugger
      return { success: true, data };
    })
    .catch((error) => {
      console.log("add product error", error);
    });
};

export const getAgents = (zipCode) => {
  return axios
    .post(`${api}/user/get_agents`, { zipCode })
    .then(({ data }) => {
      return { success: true, data };
    })
    .catch((error) => {
      console.log("get agents error", error);
    });
};

export const getUserProfile = (userId) => {
  return axios
    .post(`${api}/user/get_user_profile`, { userId })
    .then(({ data }) => {
      return { success: true, data };
    })
    .catch((error) => {
      console.log("get user profile error", error);
    });
};
