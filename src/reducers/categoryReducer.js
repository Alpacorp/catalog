import { getCategoriesAction } from "../constants/ActionTypes";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export const getCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case getCategoriesAction.GET_CATEGORIES:
      return { ...state, loading: true };
    case getCategoriesAction.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case getCategoriesAction.GET_CATEGORIES_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
