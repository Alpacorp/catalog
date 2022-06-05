import { getCategoriesAction } from "../constants/ActionTypes";

export const getCategoriesStart = () => ({
  type: getCategoriesAction.GET_CATEGORIES,
});

export const getCategoriesSuccess = (categories) => ({
  type: getCategoriesAction.GET_CATEGORIES_SUCCESS,
  payload: categories,
});

export const getCategoriesFailure = (error) => ({
  type: getCategoriesAction.GET_CATEGORIES_FAILURE,
  payload: error,
});
