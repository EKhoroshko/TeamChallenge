import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authSlice from './user/userSlice.js';
import productSlice from './product/productSlice.js';

export default configureStore({
  reducer: {
    user: authSlice,
    product: productSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
