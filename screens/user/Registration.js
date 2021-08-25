/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Dimensions, Image, ImageBackground, Keyboard, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Toast from 'react-native-toast-message';


const Registration = ({ navigation }) => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   const registrationFun = (name, email, password, confirmPassword) => {

      fetch('https://shop-bc.herokuapp.com/api/registration', {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
         },
         body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
         }),
      }).then(res => res.json())
         .then((result) => {
            if (result.succ === true) {
               Toast.show({
                  type: 'success',
                  autoHide: true,
                  text1: result?.message,
                  text2: "Please login for continue",
               });
               navigation.navigate("Login")
            } else {

               Toast.show({
                  type: 'error',
                  autoHide: true,
                  text1: result?.message,
                  text2: result?.messageTwo ? result?.messageTwo : result?.data.email,
               });
            }
         }).catch(err => {
            console.error(err + "hello")
         });
   };

   return (
      <ScrollView onPress={Keyboard.dismiss}  >
         <ImageBackground source={require('../../assets/image/bgTwo.jpg')}
            style={{
               minHeight: Dimensions.get('window').height,
               width: '100%',
            }}
         >

            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
               <Image source={{ uri: 'https://www.pngkit.com/png/full/395-3951545_shopping-shop-icon-white-png.png' }} style={{ height: 90, width: 90, resizeMode: 'contain', alignItems: 'center' }} />
            </View>

            <View style={styles.inputContainer}>
               <View>
                  <Text style={styles.titleStyle}>Name</Text>
                  <TextInput value={name}
                     onChangeText={setName}
                     selectionColor={'#fff'} style={styles.inputStyle} />
               </View>
               <View>
                  <Text style={styles.titleStyle}>Email</Text>
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
               <View>
                  <Text style={styles.titleStyle}>Confirm Password</Text>
                  <TextInput
                     value={confirmPassword}
                     onChangeText={setConfirmPassword}
                     selectionColor={'#fff'}
                     secureTextEntry={true}
                     style={styles.inputStyle} />
               </View>

               <Pressable
                  onPress={() =>
                     registrationFun(name, email, password, confirmPassword)
                  }
                  style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
                  <Text style={styles.registerButton} >Registration</Text>
               </Pressable>
            </View>

         </ImageBackground>
      </ScrollView>
   );
};

export default Registration;

const styles = StyleSheet.create({
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
      marginLeft: '10%', marginRight: '10%',
   },
   titleStyle: {
      color: '#fff',
      fontSize: 18,

   },
});
