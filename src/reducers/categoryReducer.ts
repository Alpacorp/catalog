import { AnyAction } from "redux";
import { getCategoriesAction } from "../constants/ActionTypes";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export const getCategoriesReducer = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case getCategoriesAction.GET_CATEGORIES:
      return { ...state, loading: true };
    case getCategoriesAction.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: [...state.categories, action.payload],
        loading: false,
      };
    case getCategoriesAction.GET_CATEGORIES_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
