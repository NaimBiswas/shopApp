/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ActivityIndicator, AsyncStorage, Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import { setLogedIn } from '../store/slicer/UserSlicer';

const SplashScreen = (props) => {
   console.log(props.naviation)
   const dispatch = useDispatch();
   AsyncStorage.getItem('userData')
      .then(res => JSON.parse(res))
      .then((result) => {
         if (result) {
            dispatch(setLogedIn(result.userId));
            props.setShowSplashScreen(true);
            Toast.show({
               type: 'success',
               position: 'top',
               text1: 'Login Success',
               text2: 'Thanks for being with us',
               autoHide: true,
            });
         } else {
            props.setShowSplashScreen(true);
         }
      }).catch((err) => {
         console.log(err);
      });
   return (
      <View>
         <StatusBar hidden={true} />
         <ImageBackground source={require('../assets/image/bgSplashTwo.jpg')} style={{ height: '100%', width: '100%' }}>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', marginTop: -50 }}>
               <Image
                  source={require('../assets/image/logo.png')}
                  style={{
                     height: 120, width: 120, resizeMode: 'contain', alignItems: 'center',
                  }} />

               <ActivityIndicator
                  style={{
                     marginTop
                        : 30,
                  }}

                  color="#fff" size="large" />
            </View>
         </ImageBackground>
      </View>
   );
};

export default SplashScreen;

const styles = StyleSheet.create({});
