import { configureStore } from "@reduxjs/toolkit";
import { addProductsReducer } from "../reducers/cartReducer";
import { getCategoriesReducer } from "../reducers/categoryReducer";
import { getModalProductReducer } from "../reducers/modalProductReducer";
import { getProductsReducer } from "../reducers/productReducer";
import { getProductsFilterReducer } from "../reducers/productsFilterReducer";

export const store = configureStore({
  reducer: {
    cart: addProductsReducer,
    products: getProductsReducer,
    categories: getCategoriesReducer,
    modalProduct: getModalProductReducer,
    filterList: getProductsFilterReducer,
  },
});
