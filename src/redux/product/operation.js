import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAll = createAsyncThunk(
  'product/getAll',
  async ({ page }, { rejectWithValue }) => {
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
      const allproduct = await resronse.json();
      return allproduct;
    } catch (error) {
      return rejectWithValue(error.resronse.message);
    }
  },
);

export const getProductByID = createAsyncThunk(
  'product/getByID',
  async (itemId, { rejectWithValue }) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await fetch(
        `https://us-central1-teamchalangestore.cloudfunctions.net/getItemById?itemId=${itemId}`,
        options,
      );
      const sortCategory = await response.json();
      return sortCategory;
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  },
);

export const getSortetedCategory = createAsyncThunk(
  'product/sortCategory',
  async ({ category, page, sort }, { rejectWithValue }) => {
    console.log(category, page, sort);
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await fetch(
        `https://us-central1-teamchalangestore.cloudfunctions.net/getAllItems?page=${page}&sortBy=${sort}&category=${category}`,
        options,
      );
      const sortCategory = await response.json();
      return sortCategory;
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  },
);
