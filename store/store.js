/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './slicer/ProductSlice';

export default configureStore({
   reducer: {
      product: ProductSlice,
   },
});
