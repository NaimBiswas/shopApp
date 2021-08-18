/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';
import React from 'react';


const OrderSlice = createSlice({
   name: "order",
   initialState: {
      order: []
   },
   reducers: {
      setOrder: (state, action) => {
         const newObg = {
            items: action.payload.allItems,
            totalPrice: action.payload.TotalPrice,
            totalItem: action.payload.data,
            date: action.payload.date,
         }


         const newArray = state.order.concat(newObg)

         state.order = newArray
      }
   }

});
export const { setOrder } = OrderSlice.actions
export default OrderSlice.reducer;

