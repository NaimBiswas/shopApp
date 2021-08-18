/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import DrawerNav from './Navigation/MainNav';
import 'react-native-gesture-handler';

import { Provider } from 'react-redux'
import store from './store/store';


function App() {
   return (
      <Provider store={store}>
         <DrawerNav />
      </Provider>
   );
}

export default App;
