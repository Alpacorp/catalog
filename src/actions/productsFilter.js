import { getProductsFilterAction } from "../constants/ActionTypes";

export const getProductsFilterStart = () => ({
  type: getProductsFilterAction.GET_PRODUCTS_FILTER,
});

export const getProductsFilterSuccess = (products) => ({
  type: getProductsFilterAction.GET_PRODUCTS_FILTER_SUCCESS,
  payload: products,
});

export const getProductsFilterFailure = (error) => ({
  type: getProductsFilterAction.GET_PRODUCTS_FILTER_FAILURE,
  payload: error,
});
