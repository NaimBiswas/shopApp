/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import MainNav from './Navigation/MainNav';


import { Provider } from 'react-redux'
import store from './store/store';


function App() {
   return (
      <Provider store={store}>
         <MainNav />
      </Provider>
   );
}

export default App;
