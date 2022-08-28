import { getCategoriesAction } from "../constants/ActionTypes";
import { CategoriesInterfaceStart } from "../constants/CategoriesInterface";
import {
  CategoriesInterfaceSuccess,
  CategoriesInterfaceFailure,
} from "../constants/CategoriesInterface";

export const getCategoriesStart = (): CategoriesInterfaceStart => ({
  type: getCategoriesAction.GET_CATEGORIES,
});

export const getCategoriesSuccess = (
  categories: string
): CategoriesInterfaceSuccess => ({
  type: getCategoriesAction.GET_CATEGORIES_SUCCESS,
  payload: categories,
});

export const getCategoriesFailure = (
  error: string
): CategoriesInterfaceFailure => ({
  type: getCategoriesAction.GET_CATEGORIES_FAILURE,
  payload: error,
});
