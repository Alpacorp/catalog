import {
  configureStore,
  EnhancedStore,
  StateFromReducersMapObject,
} from "@reduxjs/toolkit";
import { addProductsReducer } from "../reducers/cartReducer";
import { getCategoriesReducer } from "../reducers/categoryReducer";
import { getModalProductReducer } from "../reducers/modalProductReducer";
import { getProductsReducer } from "../reducers/productReducer";

const reducers: any = {
  cart: addProductsReducer,
  products: getProductsReducer,
  categories: getCategoriesReducer,
  modalProduct: getModalProductReducer,
};

export const store: EnhancedStore<StateFromReducersMapObject<typeof reducers>> =
  configureStore({
    reducer: reducers,
  });
