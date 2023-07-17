import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  slider: 0,
};

const slider = createSlice({
  name: "slider",
  initialState,
  reducers: {
    changeSlider: (state) => {
      state.slider = state.slider?0:1;
    },
  },
});

export const { changeSlider } = slider.actions;

export default slider.reducer;
