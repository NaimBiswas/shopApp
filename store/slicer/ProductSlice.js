/* eslint-disable prettier/prettier */
import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import dummyProduct from '../../dummyData/dummyData';
export const ProductSlice = createSlice({
   name: 'product',
   initialState: {
      products: dummyProduct,
   },
   reducers: {
      setProduct: state => {
         state.products = dummyProduct;
      },
   },
});
export const { setProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
