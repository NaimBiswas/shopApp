/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

const UserSlicer = createSlice({
   name: 'user',

   initialState: {
      loggedIn: false,
   },
   reducers: {
      setLogedIn: (state, action) => {
         state.loggedIn = true
         console.log(state);
      }
   },
});
export const { setLogedIn } = UserSlicer.actions;
export default UserSlicer.reducer;
