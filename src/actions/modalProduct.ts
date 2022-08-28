import { getModalProductAction } from "../constants/ActionTypes";
import {
  ModalInterfaceStart,
  ModalInterfaceSuccess,
  ModalInterfaceFailure,
  ModalInterfaceClear,
} from "../constants/ModalInterface";

export const getModalProductStart = (): ModalInterfaceStart => ({
  type: getModalProductAction.GET_MODAL_PRODUCT,
});

export const getModalproductSuccess = (
  product: any
): ModalInterfaceSuccess => ({
  type: getModalProductAction.GET_MODAL_PRODUCT_SUCCESS,
  payload: product,
});

export const getModalProductFailure = (
  error: string
): ModalInterfaceFailure => ({
  type: getModalProductAction.GET_MODAL_PRODUCT_FAILURE,
  payload: error,
});

export const resetModalProduct = (): ModalInterfaceClear => ({
  type: getModalProductAction.GET_MODAL_PRODUCT_CLEAR,
});
