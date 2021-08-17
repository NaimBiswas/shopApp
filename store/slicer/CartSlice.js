/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const CartSlice = createSlice({
   name: "cart",
   initialState: {
      items: [],
      totalAmount: 0,
      totalItems: 0,
   },
   reducers: {
      addToCart: (state, action) => {
         const { id, price, title } = action.payload

         if (state.items.id === id) {
            console.log("Yes")
            // const addedQun = state.items.quantity + 1
            // state.items = [

            // ]
            // state.totalAmount = state.totalAmount + (price * state.items[id].quantity) - state.items[id].price;
         } else {
            const newObj = {
               id: id,
               title: title,
               price: price,
            }
            state.items.push(newObj)
            state.totalAmount = state.totalAmount + price;
            state.totalItems = state.items.length
         }
      },
      onDelete: (state, action) => {
         const { id } = action.payload
         let itemToRemove = state.items.find(items => items.id === id)
         let new_items = state.items.filter(items => items.id !== id)


         let newTotal = state.totalAmount - (itemToRemove.price)



         state.items = new_items
         state.totalAmount = newTotal
         state.totalItems = state.totalItems - 1

         console.log(state);

      }
   }
})
export const { addToCart, onDelete } = CartSlice.actions
export default CartSlice.reducer
