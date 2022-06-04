import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Products from "../Data/products.json";
import Categories from "../Data/categories.json";

const mock = new MockAdapter(axios);
const productsBaseURL = "/api/products";
const categoriesBaseURL = "/api/categories";

mock.onGet(productsBaseURL).reply(200, Products);

export const getProducts = async () => {
  const response = await axios.get(productsBaseURL);
  return response.data;
};

mock.onGet(categoriesBaseURL).reply(200, Categories);

export const getCategories = async () => {
  const response = await axios.get(categoriesBaseURL);
  return response.data;
};
