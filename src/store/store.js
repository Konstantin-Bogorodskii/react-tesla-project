import { configureStore } from '@reduxjs/toolkit';
import CarSlice from './reducers/CarSlice';

export const store = configureStore({
  reducer: {
    cars: CarSlice,
  },
});
