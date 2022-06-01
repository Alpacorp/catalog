import { configureStore } from "@reduxjs/toolkit";
import addProducts from "../reducers/cartReducer";

export const store = configureStore({
  reducer: {
    cart: addProducts,
  },
});
