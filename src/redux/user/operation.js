import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastAction } from '../../enum/toastAction';
import { toast } from 'react-toastify';

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
      ).then(response => {
        if (response.ok) {
          return response.json();
        } else {
          switch (response.status) {
            case 401:
              throw new Error(toast.error('Invalid password', toastAction));
            case 404:
              throw new Error(toast.error('User not found', toastAction));
          }
        }
      });
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
      ).then(response => {
        if (response.ok) {
          return response.json();
        } else {
          switch (response.status) {
            case 409:
              throw new Error(toast.error('User already exists', toastAction));
            default:
              throw new Error(
                toast.error(
                  'It is necessary to fill in the registration fields correctly',
                  toastAction,
                ),
              );
          }
        }
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const refreshToken = createAsyncThunk(
  'user/refresh',
  async (token, { rejectWithValue }) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({ token }),
    };
    try {
      const response = await fetch(
        'https://us-central1-teamchalangestore.cloudfunctions.net/getUserData',
        options,
      );
      const user = response.json();
      return user;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);
