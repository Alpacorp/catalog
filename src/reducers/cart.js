import {
  ADD_PRODUCTS_FAILURE,
  ADD_PRODUCTS_START,
  ADD_PRODUCTS_SUCCESS,
} from "../constants/ActionTypes";

const initialState = {
  cart: [],
  total: 0,
  isLoading: false,
  error: null,
};

const addProducts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: [...state.cart, action.payload],
      };
    case ADD_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default addProducts;
