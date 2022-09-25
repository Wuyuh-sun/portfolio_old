import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules/counterSlice';
import splashReducer from './modules/splashSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    splash:splashReducer
  },
})