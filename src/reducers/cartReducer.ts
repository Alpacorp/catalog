import { cartProductsAction } from "../constants/ActionTypes";
import { AnyAction } from "redux";

const initialState: any = {
  cart: [],
  total: 0,
  quantity: 0,
  isLoading: false,
  error: null,
};

export const addProductsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case cartProductsAction.ADD_PRODUCTS_START:
      return {
        isLoading: true,
        error: null,
      };
    case cartProductsAction.ADD_PRODUCTS_SUCCESS:
      return {
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price,
        quantity: state.quantity + 1,
      };
    case cartProductsAction.ADD_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case cartProductsAction.REMOVE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter(
          (product: any) => product.id !== action.payload
        ),
        total:
          state?.total -
          state?.cart?.find((product: any) => product?.id === action?.payload)
            .price,
        quantity: state.quantity - 1,
      };
    default:
      return state;
  }
};
