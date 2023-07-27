import { createSlice } from '@reduxjs/toolkit';
import { getAll, getSortetedCategory } from './operation';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    allItem: [],
    error: null,
    isloading: false,
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
      }));
  },
});

export default productSlice.reducer;