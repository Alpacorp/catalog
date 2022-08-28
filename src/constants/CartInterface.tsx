import { cartProductsAction } from "./ActionTypes";

export interface CartInterfaceStart {
  type: cartProductsAction.ADD_PRODUCTS_START;
}

export interface CartInterfaceSuccess {
  type: cartProductsAction.ADD_PRODUCTS_SUCCESS;
  payload: string[];
}

export interface CartInterfaceError {
  type: cartProductsAction.ADD_PRODUCTS_FAILURE;
  payload: string;
}

export interface CartInterfaceRemove {
  type: cartProductsAction.REMOVE_PRODUCT;
  payload: number;
}
