import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  registrationUser,
  refreshToken,
  logOutUser,
} from './operation';

const authSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    isLoading: false,
    isLogin: false,
    history: [],
    error: null,
    token: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, state => ({
        ...state,
        isLoading: true,
      }))
      .addCase(loginUser.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        username: payload.username,
        email: payload.email,
        history: payload.history,
        token: payload.token,
        error: null,
      }))
      .addCase(loginUser.rejected, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload,
      }))
      .addCase(registrationUser.pending, state => ({
        ...state,
        isLoading: true,
      }))
      .addCase(registrationUser.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        username: payload.username,
        email: payload.email,
        token: payload.token,
      }))
      .addCase(registrationUser.rejected, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload,
      }))
      .addCase(refreshToken.pending, state => ({
        ...state,
        isLoading: true,
      }))
      .addCase(refreshToken.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        username: payload.username,
        email: payload.email,
        token: payload.token,
      }))
      .addCase(refreshToken.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }))
      .addCase(logOutUser.pending, state => ({
        ...state,
        isLoading: true,
      }))
      .addCase(logOutUser.fulfilled, () => ({
        username: '',
        email: '',
        isLoading: false,
        isLogin: false,
        history: [],
        token: null,
      }))
      .addCase(logOutUser.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
      }));
  },
});

export default authSlice.reducer;
