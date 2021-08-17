/* eslint-disable prettier/prettier */
import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import dummyProduct from '../../dummyData/dummyData';
export const ProductSlice = createSlice({
   name: 'product',
   initialState: {
      products: dummyProduct,
      singleProduct: null,
   },
   reducers: {
      setProduct: state => {
         state.products = dummyProduct;
      },
      singleProduc: (state, action) => {
         const { id } = action.payload
         const singleProducts = state.products.find(item => item.id === id)
         state.singleProduct = singleProducts
      }
   },
});
export const { setProduct, singleProduc } = ProductSlice.actions;
export default ProductSlice.reducer;
