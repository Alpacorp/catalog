import { getProductsAction } from "../constants/ActionTypes";

export const getProducts = () => ({
  type: getProductsAction.GET_PRODUCTS,
});

export const getProductsSuccess = (products) => ({
  type: getProductsAction.GET_PRODUCTS_SUCCESS,
  payload: products,
});

export const getproductsFailure = (error) => ({
  type: getProductsAction.GET_PRODUCTS_FAILURE,
  payload: error,
});
