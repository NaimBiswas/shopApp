/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TextInput, KeyboardAvoidingView, Button, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import StatusBarStyle from '../../components/StatusBarStyle';

const AddNewProdcut = ({ navigation }) => {
   const [title, setTitle] = useState('');
   const [price, setPrice] = useState('');
   const [imageURL, setImageURL] = useState('');
   const [description, setDescription] = useState('');
   const [isLoading, setIsLoading] = useState(false)
   const userId = useSelector(state => state.user.userId);

   const onSubmit = () => {
      setIsLoading(true)
      fetch('https://shop-bc.herokuapp.com/api/add-product', {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'id': userId,
         },
         body: JSON.stringify({
            title: title,
            price: price,
            imageURL: imageURL,
            description: description,
         }),
      }).then(res => res.json())
         .then((result) => {
            setIsLoading(false)
            if (result.succ === true) {
               Toast.show({
                  type: 'success',
                  position: 'top',
                  text1: result.message,
               });
               setTitle('');
               setPrice('');
               setDescription('');
               setImageURL('')
            } else {
               Toast.show({
                  type: 'error',
                  position: 'top',
                  text1: result.message,
                  text2: 'Those are required!',
               });
            }
         }).catch((err) => {
            setIsLoading(false)
            Toast.show({
               type: 'error',
               position: 'top',
               text1: err,
            });
         });

   };

   return (
      <ScrollView>
         <StatusBarStyle />
         <KeyboardAvoidingView behavior={'padding'}>
            <View style={styles.container}>
               <View style={styles.shadowContainer}>
                  <View>
                     <Text style={styles.inputTitle}>Title</Text>
                     <TextInput value={title} onChangeText={setTitle} style={styles.inputStyle} />
                  </View>
                  <View>
                     <Text style={styles.inputTitle} >Price</Text>
                     <TextInput value={price} onChangeText={setPrice} keyboardType={'number-pad'} style={styles.inputStyle} />
                  </View>
                  <View>
                     <Text style={styles.inputTitle} >Image URL</Text>
                     <TextInput value={imageURL} onChangeText={setImageURL} keyboardType={'url'} style={styles.inputStyle} />
                  </View>
                  <View>
                     <Text style={styles.inputTitle} >Description</Text>
                     <TextInput
                        value={description} onChangeText={setDescription}
                        style={styles.inputStyle} />
                  </View>
               </View>
               <View style={{ padding: 20 }}>
                  {
                     isLoading ?

                        <ActivityIndicator
                           style={{ backgroundColor: '#76777B', }}
                           size='large' color="#EDCA4D" animating={true} />


                        :
                        <Button title="Submit" color="#3EB595" onPress={onSubmit} />
                  }
               </View>
            </View>
         </KeyboardAvoidingView>
      </ScrollView>
   );
};

export default AddNewProdcut;

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
      shadowColor: '#000',
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
});
