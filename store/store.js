import { configureStore } from '@reduxjs/toolkit';
import splashReducer from './modules/splashSlice';

export const store = configureStore({
  reducer: {
    splash:splashReducer
  },
})