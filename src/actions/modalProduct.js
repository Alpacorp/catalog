import { getModalProductAction } from "../constants/ActionTypes";

export const getModalProductStart = () => ({
  type: getModalProductAction.GET_MODAL_PRODUCT,
});

export const getModalproductSuccess = (product) => ({
  type: getModalProductAction.GET_MODAL_PRODUCT_SUCCESS,
  payload: product,
});

export const getModalProductFailure = (error) => ({
  type: getModalProductAction.GET_MODAL_PRODUCT_FAILURE,
  payload: error,
});

export const resetModalProduct = () => ({
  type: getModalProductAction.GET_MODAL_PRODUCT_CLEAR,
});
