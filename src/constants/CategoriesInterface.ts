import { getCategoriesAction } from "./ActionTypes";

export interface CategoriesInterfaceStart {
  type: getCategoriesAction.GET_CATEGORIES;
}

export interface CategoriesInterfaceSuccess {
  type: getCategoriesAction.GET_CATEGORIES_SUCCESS;
  payload: string;
}

export interface CategoriesInterfaceFailure {
  type: getCategoriesAction.GET_CATEGORIES_FAILURE;
  payload: string;
}
