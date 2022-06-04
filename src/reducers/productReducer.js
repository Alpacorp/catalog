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
      };
    case getProductsAction.GET_PRODUCTS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
