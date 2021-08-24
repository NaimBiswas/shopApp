/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import DrawerNav from './Navigation/MainNav';
import 'react-native-gesture-handler';

import { Provider } from 'react-redux'
import store from './store/store';
import Toast, { BaseToast } from 'react-native-toast-message';






function App() {








   return (
      <Provider store={store}>
         <DrawerNav />
         <Toast ref={(ref) => Toast.setRef(ref)} />
      </Provider>
   );
}

export default App;
