import { getModalProductAction } from "./ActionTypes";

export interface ModalInterfaceStart {
  type: getModalProductAction.GET_MODAL_PRODUCT;
}

export interface ModalInterfaceSuccess {
  type: getModalProductAction.GET_MODAL_PRODUCT_SUCCESS;
  payload: any;
}

export interface ModalInterfaceFailure {
  type: getModalProductAction.GET_MODAL_PRODUCT_FAILURE;
  payload: string;
}

export interface ModalInterfaceClear {
  type: getModalProductAction.GET_MODAL_PRODUCT_CLEAR;
}
