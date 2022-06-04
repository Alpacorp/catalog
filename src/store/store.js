import { configureStore } from "@reduxjs/toolkit";
import { addProductsReducer } from "../reducers/cartReducer";
import { getCategoriesReducer } from "../reducers/categoryReducer";
import { getProductsReducer } from "../reducers/productReducer";

export const store = configureStore({
  reducer: {
    cart: addProductsReducer,
    products: getProductsReducer,
    categories: getCategoriesReducer,
  },
});
