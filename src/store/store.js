import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import burgerSlice from './reducers/burgerSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    burger: burgerSlice,
  },
});
