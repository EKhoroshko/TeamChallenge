import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registrationUser } from './operation';

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
      .addCase(loginUser.pending, () => ({
        isLoading: true,
      }))
      .addCase(loginUser.fulfilled, (state, { payload }) => ({
        ...state,
        isLogin: true,
        isLoading: false,
        username: payload.username,
        email: payload.email,
        history: payload.history,
        token: payload.token,
        error: null,
      }))
      .addCase(loginUser.rejected, (_, { payload }) => ({
        error: payload,
      }))
      .addCase(registrationUser.pending, () => ({
        isLoading: true,
      }))
      .addCase(registrationUser.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        username: payload.username,
        email: payload.email,
        token: payload.token,
      }))
      .addCase(registrationUser.rejected, (_, { payload }) => ({
        error: payload,
      }));
  },
});

export default authSlice.reducer;
