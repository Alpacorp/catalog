import { getProductsAction } from "../constants/ActionTypes";
import { ProductsInterfaceFailure } from "../constants/ProductsInterface";
import {
  ProductsInterfaceStart,
  ProductsInterfaceSuccess,
} from "../constants/ProductsInterface";

export const getProductsStart = (): ProductsInterfaceStart => ({
  type: getProductsAction.GET_PRODUCTS,
});

export const getProductsSuccess = (
  products: string[]
): ProductsInterfaceSuccess => ({
  type: getProductsAction.GET_PRODUCTS_SUCCESS,
  payload: products,
});

export const getproductsFailure = (
  error: string
): ProductsInterfaceFailure => ({
  type: getProductsAction.GET_PRODUCTS_FAILURE,
  payload: error,
});
