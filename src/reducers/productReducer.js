import { getProductsAction } from "../constants/ActionTypes";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const getProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case getProductsAction.GET_PRODUCTS:
      return { ...state, loading: true };
    case getProductsAction.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false,
      };
    case getProductsAction.GET_PRODUCTS_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
