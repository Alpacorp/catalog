import { getProductsFilterAction } from "../constants/ActionTypes";

const initialState = {
  loading: false,
  error: null,
  products: [],
};

export const getProductsFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case getProductsFilterAction.GET_PRODUCTS_FILTER:
      return { ...state, loading: true };
    case getProductsFilterAction.GET_PRODUCTS_FILTER_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false,
      };
    case getProductsFilterAction.GET_PRODUCTS_FILTER_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
