import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAll = createAsyncThunk(
  'product/getAll',
  async (page = 1, { rejectWithValue }) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const resronse = await fetch(
        `https://us-central1-teamchalangestore.cloudfunctions.net/getAllItems?page=${page}`,
        options,
      );
      const allproduct = resronse.json();
      return allproduct;
    } catch (error) {
      return rejectWithValue(error.resronse.message);
    }
  },
);

export const getSortetedCategory = createAsyncThunk(
  'product/sortCategory',
  async ({ category, page }, { rejectWithValue }) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await fetch(
        `https://us-central1-teamchalangestore.cloudfunctions.net/getAllItems?category=${category}&page=${page}`,
        options,
      );
      const sortCategory = response.json();
      return sortCategory;
    } catch (error) {
      return rejectWithValue(error.resronse.message);
    }
  },
);
