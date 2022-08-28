import { cartProductsAction } from "../constants/ActionTypes";
import {
  CartInterfaceStart,
  CartInterfaceSuccess,
  CartInterfaceError,
  CartInterfaceRemove,
} from "../constants/CartInterface";

export const addToCartStart = (): CartInterfaceStart => ({
  type: cartProductsAction.ADD_PRODUCTS_START,
});

export const addToCartSuccess = (product: string[]): CartInterfaceSuccess => ({
  type: cartProductsAction.ADD_PRODUCTS_SUCCESS,
  payload: product,
});

export const addToCartFailure = (error: string): CartInterfaceError => ({
  type: cartProductsAction.ADD_PRODUCTS_FAILURE,
  payload: error,
});

export const removeProduct = (id: number): CartInterfaceRemove => ({
  type: cartProductsAction.REMOVE_PRODUCT,
  payload: id,
});
