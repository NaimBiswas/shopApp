/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ActivityIndicator, AsyncStorage, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import { setLogedIn } from '../store/slicer/UserSlicer';

const SplashScreen = ({ navigation, setShowSplashScreen }) => {
   const dispatch = useDispatch();
   AsyncStorage.getItem('userData')
      .then(res => JSON.parse(res))
      .then((result) => {

         if (result) {

            console.log(result.userId);
            dispatch(setLogedIn(result.userId));
            setShowSplashScreen(true);
            Toast.show({
               type: 'success',
               position: 'top',
               text1: 'Login Success',
               text2: 'Thanks for being with us',
               autoHide: true,
            });
         } else {
            navigation.navigate('Login');
         }
      }).catch((err) => {
         console.log(err);
      });
   return (
      <View>
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
