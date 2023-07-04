import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authSlice from './user/userSlice.js';

export default configureStore({
  reducer: {
    user: authSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
