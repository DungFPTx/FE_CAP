import axios from "axios";

export const getProduct = id => {
  axios.get(`students/${id}`);
};
