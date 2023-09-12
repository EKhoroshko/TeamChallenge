import { createSlice } from '@reduxjs/toolkit';
import {
  getAll,
  getSortetedCategory,
  getProductByID,
  getPromo,
} from './operation';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    allItem: [],
    productById: null,
    error: null,
    isloading: false,
    promo: {},
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAll.pending, state => ({
        ...state,
        isloading: true,
      }))
      .addCase(getAll.fulfilled, (state, { payload }) => ({
        ...state,
        allItem: payload,
        isloading: false,
      }))
      .addCase(getAll.rejected, (state, { payload }) => ({
        ...state,
        error: payload,
        isloading: false,
      }))
      .addCase(getSortetedCategory.pending, state => ({
        ...state,
        isloading: true,
      }))
      .addCase(getSortetedCategory.fulfilled, (state, { payload }) => ({
        ...state,
        allItem: payload,
        isloading: false,
      }))
      .addCase(getSortetedCategory.rejected, (state, { payload }) => ({
        ...state,
        error: payload,
        isloading: false,
      }))
      .addCase(getProductByID.pending, state => ({
        ...state,
        isloading: true,
      }))
      .addCase(getProductByID.fulfilled, (state, { payload }) => ({
        ...state,
        isloading: false,
        productById: payload,
      }))
      .addCase(getProductByID.rejected, (state, { payload }) => ({
        ...state,
        error: payload,
        isloading: false,
      }))
      .addCase(getPromo.pending, state => ({
        ...state,
        isloading: true,
      }))
      .addCase(getPromo.fulfilled, (state, { payload }) => ({
        ...state,
        isloading: false,
        promo: payload,
      }))
      .addCase(getPromo.rejected, (state, { payload }) => ({
        ...state,
        isloading: false,
        error: payload,
      }));
  },
});

export default productSlice.reducer;
