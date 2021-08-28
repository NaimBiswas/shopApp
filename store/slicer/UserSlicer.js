/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

const UserSlicer = createSlice({
   name: 'user',

   initialState: {
      loggedIn: false,
      userId: '',
   },
   reducers: {
      setLogedIn: (state, action) => {
         state.loggedIn = true;
         state.userId = action.payload;
      },
      setLogOut: (state, action) => {
         state.loggedIn = false;
         state.userId = '';
      },
   },
});
export const { setLogedIn, setLogOut } = UserSlicer.actions;
export default UserSlicer.reducer;
