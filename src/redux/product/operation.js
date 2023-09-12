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
      return rejectWithValue(error.message);
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
      const productInfo = await response.json();
      return productInfo;
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  },
);

export const getSortetedCategory = createAsyncThunk(
  'product/sortCategory',
  async (
    {
      category,
      page,
      subcategory = '',
      sort = 'newest',
      range = '',
      brand = [],
      type = [],
    },
    { rejectWithValue },
  ) => {
    if (range === 0) {
      range = '';
    }
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await fetch(
        `https://us-central1-teamchalangestore.cloudfunctions.net/getAllItems?page=${page}&category=${category}&subcategory=${subcategory}&sort=${sort}&range=${range}&brand=${brand}&type=${type}`,
        options,
      );
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  },
);

export const getPromo = createAsyncThunk(
  'product/promo',
  async (promo, { rejectWithValue }) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ discountCode: promo }),
    };
    try {
      const response = await fetch(
        'https://us-central1-teamchalangestore.cloudfunctions.net/checkPromo',
        options,
      );
      return await response.json();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
