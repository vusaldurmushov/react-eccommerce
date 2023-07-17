import { configureStore } from "@reduxjs/toolkit";
import basket from "../redux/basket/basket";
import category from "../redux/category/category";
import products from "../redux/products/products";
import slider from "../redux/slider/slider";
import wish from "../redux/wish/wish";


const store = configureStore({
  reducer: {
    category: category,
    basket: basket,
    products: products,
    wish: wish,
    slider: slider,
  },
});

export default store;
