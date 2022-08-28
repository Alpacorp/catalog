import { getProductsAction } from "./ActionTypes";

export interface ProductsInterfaceStart {
  type: getProductsAction.GET_PRODUCTS;
}

export interface ProductsInterfaceSuccess {
  type: getProductsAction.GET_PRODUCTS_SUCCESS;
  payload: string[];
}

export interface ProductsInterfaceFailure {
  type: getProductsAction.GET_PRODUCTS_FAILURE;
  payload: string;
}

export interface ProductsInterfaceFilter {
  type: getProductsAction.GET_PRODUCTS_FILTER;
  payload: string[];
}
