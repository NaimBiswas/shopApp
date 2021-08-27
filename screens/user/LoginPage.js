/* eslint-disable handle-callback-err */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { ActivityIndicator, Dimensions, Image, ImageBackground, Keyboard, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import { setLogedIn } from '../../store/slicer/UserSlicer';

const LoginPage = ({ navigation }) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [isLoading, setIsLoading] = useState(false)
   const dispatch = useDispatch()


   const loginFun = (email, password) => {
      setIsLoading(true)
      fetch('https://shop-bc.herokuapp.com/api/login', {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
         },
         body: JSON.stringify({
            email: email,
            password: password,
         }),
      }).then(res => res.json())
         .then((result) => {
            if (result.succ === true) {
               Toast.show({
                  type: 'success',
                  autoHide: true,
                  text1: result?.message,
                  text2: 'Thanks for being with us!',
               });
               setIsLoading(false)
               navigation.navigate('Feed');
               console.log(result);
               dispatch(setLogedIn(result.data._id))
            } else {
               Toast.show({
                  type: 'error',
                  autoHide: true,
                  text1: result?.message,
                  text2: result?.messageTwo ? result?.messageTwo : 'Please create a account & continue',
               });
               setIsLoading(false)
            }
         }).catch(err => {
            console.log(err);
            Toast.show({
               type: 'error',
               autoHide: true,
               text1: 'Something went wrong',
               text2: 'Try again later',
            });
            setIsLoading(false)
         });
   };













   return (
      <ScrollView onPress={Keyboard.dismiss}  >
         <ImageBackground source={require('../../assets/image/bgOne.jpg')}
            style={{
               minHeight: Dimensions.get('window').height,
               width: '100%',
               height: '100%',
            }}
         >

            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20%' }}>
               <Image source={{ uri: 'https://www.pngkit.com/png/full/395-3951545_shopping-shop-icon-white-png.png' }} style={{ height: 90, width: 90, resizeMode: 'contain', alignItems: 'center' }} />
            </View>

            <View style={styles.inputContainer}>

               <View>
                  <Text
                     style={styles.titleStyle}>Email</Text>
                  <TextInput
                     value={email}
                     onChangeText={setEmail}
                     keyboardType={'email-address'}
                     selectionColor={'#fff'}
                     style={styles.inputStyle} />
               </View>
               <View>
                  <Text style={styles.titleStyle}>Password</Text>
                  <TextInput
                     value={password}
                     onChangeText={setPassword}
                     selectionColor={'#fff'} secureTextEntry={true} style={styles.inputStyle} />
               </View>


               <Pressable
                  onPress={() => { loginFun(email, password); }}
                  style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
                  {isLoading ?
                     <Text style={styles.loadingStyle} ><ActivityIndicator size="large" color="#D90B1C" /> </Text>
                     :
                     <Text style={styles.registerButton} >Log In</Text>
                  }
               </Pressable>
            </View>

         </ImageBackground>
      </ScrollView>

   );
};

export default LoginPage;

const styles = StyleSheet.create({
   loadingStyle: {
      padding: 20,
      backgroundColor: '#012840',

      letterSpacing: 2,
      borderRadius: 10,

   },
   registerButton: {
      padding: 20,
      backgroundColor: '#012840',
      color: '#fff',
      fontSize: 15,
      letterSpacing: 2,
      borderRadius: 10,
   },
   inputStyle: {
      borderBottomColor: '#fff',
      borderBottomWidth: 1,
      marginBottom: 20,
      color: '#fff',
      fontSize: 16,
   },
   inputContainer: {
      margin: 20,
      marginLeft: '10%', marginTop: '18%', marginRight: '10%',
   },
   titleStyle: {
      color: '#fff',
      fontSize: 18,

   },
});
