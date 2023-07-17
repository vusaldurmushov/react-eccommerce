import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";

const notify = () =>
  toast.warn("This product already exist wishlist !", {
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
  toast.success("You add the product whishlist !", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

const initialState = {
  wish: localStorage.getItem("wish")
    ? JSON.parse(localStorage.getItem("wish"))
    : [],
};

const wish = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToWish: (state, action) => {
      let check = state.wish.filter((e) => e.id == action.payload.id);
      if (check.length == 0) {
        state.wish = [...state.wish, action.payload];
        notify2();
      } else {
        notify();
      }
      localStorage.setItem("wish", JSON.stringify(state.wish));
    },

    removeFromWish: (state, action) => {
      state.wish = state.wish.filter((e) => e.id !== action.payload.id);
      localStorage.setItem("wish", JSON.stringify(state.wish));
    },
  },
});

export const { addToWish, removeFromWish } = wish.actions;

export default wish.reducer;
