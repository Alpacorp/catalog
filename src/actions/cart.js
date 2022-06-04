import { cartProductsAction } from "../constants/ActionTypes";

export const addToCartStart = () => ({
  type: cartProductsAction.ADD_PRODUCTS_START,
});

export const addToCartSuccess = (
  id,
  name,
  price,
  description,
  image,
  discount,
  quantity
) => ({
  type: cartProductsAction.ADD_PRODUCTS_SUCCESS,
  payload: { id, name, price, description, image, discount, quantity },
});

export const addToCartFailure = (error) => ({
  type: cartProductsAction.ADD_PRODUCTS_FAILURE,
  payload: error,
});

export const removeProduct = (id) => ({
  type: cartProductsAction.REMOVE_PRODUCT,
  payload: id,
});
