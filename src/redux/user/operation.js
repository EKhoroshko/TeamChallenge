import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    };
    try {
      return await fetch(
        'https://us-central1-teamchalangestore.cloudfunctions.net/loginUser',
        options,
      ).then(response => response.json());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const registrationUser = createAsyncThunk(
  'user/registration',
  async ({ email, username, password }, { rejectWithValue }) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, username, password }),
    };
    try {
      return await fetch(
        'https://us-central1-teamchalangestore.cloudfunctions.net/setUserInfo',
        options,
      ).then(response => response.json());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
