/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './slicer/CartSlice';
import ProductSlice from './slicer/ProductSlice';

export default configureStore({
   reducer: {
      product: ProductSlice,
      cart: CartSlice
   },
});
