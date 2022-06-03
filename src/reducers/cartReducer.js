import {
  ADD_PRODUCTS_FAILURE,
  ADD_PRODUCTS_START,
  ADD_PRODUCTS_SUCCESS,
  REMOVE_PRODUCT,
} from "../constants/ActionTypes";

const initialState = {
  cart: [],
  total: 0,
  quantity: 0,
  isLoading: false,
  error: null,
};

const addProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ADD_PRODUCTS_SUCCESS:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price,
        quantity: state.quantity + 1,
      };
    case ADD_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
        total: state.total - action.payload.price,
        quantity: state.quantity - 1,
      };
    default:
      return state;
  }
};

export default addProductsReducer;
