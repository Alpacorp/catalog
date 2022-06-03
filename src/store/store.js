import { configureStore } from "@reduxjs/toolkit";
import addProductsReducer from "../reducers/cartReducer";

export const store = configureStore({
  reducer: {
    cart: addProductsReducer,
  },
});
