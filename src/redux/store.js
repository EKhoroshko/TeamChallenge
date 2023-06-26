import { configureStore } from '@reduxjs/toolkit';
import authSlice from './user/userSlice.js';

export default configureStore({
  reducer: {
    user:authSlice,
  },
})