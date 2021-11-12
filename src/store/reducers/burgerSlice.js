import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

export const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    openBurger(state) {
      state.isOpen = true;
    },
    closeBurger(state) {
      state.isOpen = false;
    },
  },
});

export const { openBurger, closeBurger } = burgerSlice.actions;

export const selectBurger = state => state.burger.isOpen;
// name: 'burger', -> burger in store.js

export default burgerSlice.reducer;
