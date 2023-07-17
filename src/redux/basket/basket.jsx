import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

import { toast } from "react-toastify";

const notify = () =>
  toast.warn("You have added this item to the card !", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

const notify2 = () =>
  toast.success("You have successfully added item to the card", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

const notify3 = () =>
  toast.success("Yd", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const notify4 =() =>
  toast.error('This product is out of stock!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

const initialState = {
  basket: localStorage.getItem("basket")
    ? JSON.parse(localStorage.getItem("basket"))
    : [],
};

const basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      let check = state.basket.filter((e) => e.id == action.payload.id);
      if (check.length == 0) {
        notify2();
        state.basket = [...state.basket, action.payload];
      } else {
        notify();
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    removeFromBasket: (state, action) => {
      state.basket = state.basket.filter((e) => e.id != action.payload.id);
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    increaseCount: (state, action) => {
      let t = state.basket.find((e) => e.id == action.payload.id);
      t.count++;
      t.stock--;
      if (t.stock === 1) {
        notify4()
        t.disable = true;
      }

      state.basket = [...state.basket];
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    reduceCount: (state, action) => {
      let t = state.basket.find((e) => e.id == action.payload.id);
      t.count--;
      t.stock++;
      t.disable = false;
      if (t.count == 0) {
        state.basket = state.basket.filter((e) => e.id != action.payload.id);
      }
      state.basket = [...state.basket];
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
  },
});

export const { addToBasket, removeFromBasket, increaseCount, reduceCount } =
  basket.actions;

export default basket.reducer;
