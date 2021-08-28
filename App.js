/* eslint-disable prettier/prettier */
// In App.js in a new project

import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native';
import DrawerNav from './Navigation/MainNav';
import 'react-native-gesture-handler';

import { Provider } from 'react-redux'
import store from './store/store';
import Toast, { BaseToast } from 'react-native-toast-message';
import SplashScreen from './screens/SplashScreen';






function App() {

   const [ShowSplashScreen, setShowSplashScreen] = useState(false)
   // useEffect(() => {
   //    setTimeout(() => {
   //       setShowSplashScreen(true)
   //    }, 3000);
   // }, [])







   return (
      <Provider store={store}>
         {
            ShowSplashScreen ?
               <DrawerNav />
               :
               <SplashScreen setShowSplashScreen={setShowSplashScreen} />
         }
         <Toast ref={(ref) => Toast.setRef(ref)} />
      </Provider>
   );
}

export default App;
