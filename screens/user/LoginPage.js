/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { Dimensions, Image, ImageBackground, Keyboard, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

const LoginPage = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   return (
      <ScrollView onPress={Keyboard.dismiss}  >
         <ImageBackground source={require('../../assets/image/bgOne.jpg')}
            style={{
               minHeight: Dimensions.get('window').height,
               width: "100%",
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


               <Pressable style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10%', }}>
                  <Text style={styles.registerButton} >Log In</Text>
               </Pressable>
            </View>

         </ImageBackground>
      </ScrollView>

   )
}

export default LoginPage

const styles = StyleSheet.create({
   registerButton: {
      padding: 20,
      backgroundColor: '#012840',
      color: "#fff",
      fontSize: 15,
      letterSpacing: 2,
      borderRadius: 10,
   },
   inputStyle: {
      borderBottomColor: "#fff",
      borderBottomWidth: 1,
      marginBottom: 20,
      color: "#fff",
      fontSize: 16,
   },
   inputContainer: {
      margin: 20,
      marginLeft: '10%', marginTop: '18%', marginRight: '10%'
   },
   titleStyle: {
      color: '#fff',
      fontSize: 18,

   }
})