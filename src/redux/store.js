import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './imagesSlice';

export const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
});
