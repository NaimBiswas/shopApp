/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions, TextInput, KeyboardAvoidingView, Button } from 'react-native'
import { Icon } from 'react-native-elements'
import StatusBarStyle from '../../components/StatusBarStyle'

const AddNewProdcut = ({ navigation }) => {

   useEffect(() => {
      navigation.setOptions({

         // headerLeft: () => (
         //    <View>
         //       <Text
         //          style={{ paddingRight: 20 }}
         //       ><Icon type="antdesign" name="arrowleft" color="#fff" size={30} /></Text>
         //    </View>
         // ),


      })
   }, [navigation])
   return (
      <ScrollView>
         <StatusBarStyle />
         <KeyboardAvoidingView behavior={'padding'}>
            <View style={styles.container}>
               <View style={styles.shadowContainer}>
                  <View>
                     <Text style={styles.inputTitle}>Title</Text>
                     <TextInput style={styles.inputStyle} />
                  </View>
                  <View>
                     <Text style={styles.inputTitle} >Price</Text>
                     <TextInput keyboardType={'number-pad'} style={styles.inputStyle} />
                  </View>
                  <View>
                     <Text style={styles.inputTitle} >Image URL</Text>
                     <TextInput keyboardType={'url'} style={styles.inputStyle} />
                  </View>
                  <View>
                     <Text style={styles.inputTitle} >Description</Text>
                     <TextInput keyboardType={'decimal-pad'} style={styles.inputStyle} />
                  </View>
               </View>
               <View style={{ padding: 20, }}>
                  <Button title="Submit" color="#3EB595" onPress={() => { }} />
               </View>
            </View>
         </KeyboardAvoidingView>
      </ScrollView>
   )
}

export default AddNewProdcut

const styles = StyleSheet.create({
   inputStyle: {
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      marginBottom: 16,
      marginTop: 0,
      color: '#121212',
      fontSize: 16,
      paddingTop: -10,
   },
   inputTitle: {
      fontSize: 17,
      letterSpacing: 2,
      color: '#121212',
      fontWeight: 'bold',
   },
   shadowContainer: {
      padding: 20,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
      backgroundColor: '#fff',
      minHeight: 300,
      margin: 15,
      borderRadius: 10,
   },
   container: {
      backgroundColor: '#f2f2f2',
      height: '100%',
      width: '100%',

   },
})
