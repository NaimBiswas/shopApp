/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';
import React from 'react';


const OrderSlice = createSlice({
   name: "order",
   initialState: {
      order: [],
   },
   reducers: {
      setOrder: (state, action) => {
         const newObg = {
            items: action.payload.allItems,
            totalPrice: action.payload.TotalPrice,
            totalItem: action.payload.data,
            date: action.payload.date,
         }
         state.order.push(newObg)

         console.log(state)
      }
   }

});
export const { setOrder } = OrderSlice.actions
export default OrderSlice.reducer;

