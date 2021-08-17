/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const CartSlice = createSlice({
   name: "cart",
   initialState: {
      items: {},
      totalAmount: 0,
      totalItems: 0,

   },
   reducers: {
      addToCart: (state, action) => {

         const { id, price, title } = action.payload

         if (state.items[id]) {
            const addedQun = state.items[id].quantity + 1
            state.items = {
               ...state.items,
               [id]: {
                  title: title,
                  price: price,
                  quantity: addedQun,
               },
               subTotal: addedQun * price
            }
            state.totalAmount = state.totalAmount + (price * state.items[id].quantity) - state.items[id].price;
         } else {
            state.items = {
               ...state.items,
               [id]: {
                  title: title,
                  price: price,
                  quantity: 1,
               },
               subTotal: 1 * price
            }
            state.totalAmount = state.totalAmount + state.items.subTotal;
            state.totalItems = state.totalItems + state.items[id].quantity
         }
         console.log(state);




      }
   }
})
export const { addToCart } = CartSlice.actions
export default CartSlice.reducer
