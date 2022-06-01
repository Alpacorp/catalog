import {
  ADD_PRODUCTS_FAILURE,
  ADD_PRODUCTS_START,
  ADD_PRODUCTS_SUCCESS,
  REMOVE_PRODUCT,
} from "../constants/ActionTypes";

export const addToCartStart = (id) => ({
  type: ADD_PRODUCTS_START,
  payload: id,
});

export const addToCartSuccess = (
  id,
  name,
  price,
  description,
  image,
  discount
) => ({
  type: ADD_PRODUCTS_SUCCESS,
  payload: { id, name, price, description, image, discount },
});

export const addToCartFailure = (error) => ({
  type: ADD_PRODUCTS_FAILURE,
  payload: error,
});

export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  payload: id,
});
