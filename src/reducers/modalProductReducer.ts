import { AnyAction } from "redux";
import { getModalProductAction } from "../constants/ActionTypes";

const initialState = {
  product: {},
  loading: false,
  error: null,
  open: false,
};

export const getModalProductReducer = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case getModalProductAction.GET_MODAL_PRODUCT:
      return { ...state, loading: true, open: false };
    case getModalProductAction.GET_MODAL_PRODUCT_SUCCESS:
      return { ...state, loading: false, open: true, product: action.payload };
    case getModalProductAction.GET_MODAL_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case getModalProductAction.GET_MODAL_PRODUCT_CLEAR:
      return initialState;
    default:
      return state;
  }
};
