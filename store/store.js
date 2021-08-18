/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './slicer/CartSlice';
import OrderSlice from './slicer/OrderSlice';
import ProductSlice from './slicer/ProductSlice';

export default configureStore({
   reducer: {
      product: ProductSlice,
      cart: CartSlice,
      order: OrderSlice
   },
});
