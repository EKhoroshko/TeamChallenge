import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAll = createAsyncThunk(
  'product/getAll',
  async (_, { rejectWithValue }) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const resronse = await fetch(
        'https://us-central1-teamchalangestore.cloudfunctions.net/getAllItems',
        options,
      );
      const allproduct = resronse.json();
      return allproduct;
    } catch (error) {
      return rejectWithValue(error.resronse.message);
    }
  },
);
