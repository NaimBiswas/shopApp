/* eslint-disable prettier/prettier */
import React from 'react';
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slicer/CartSlice'
function FlatListRenderViewScreen({ itemData, navigation }) {
   const dispatch = useDispatch();
   const addToCartFun = (item) => {
      dispatch(addToCart(item))

   };
   return (


      <ScrollView>

         <TouchableNativeFeedback>
            <View style={styles.cardContainer}>

               <View style={styles.imageContainer}>

                  <Image

                     source={{ uri: itemData.image }} style={styles.imageView} />

               </View>
               <Text style={styles.titleStyle}>{itemData.title}</Text>
               <View style={styles.carBottom}>

                  <Pressable onPress={() => navigation.navigate('ProductDetails', { id: itemData.id })}
                     style={styles.DetailsButton}>
                     <Text style={styles.buttonTitle}>
                        <Icon type="font-awesome-5" name="eye" size={26} color="#fff" />
                     </Text>
                  </Pressable>


                  <Text style={styles.priceText}>$ {itemData.price}</Text>

                  <Pressable onPress={() => addToCartFun(itemData)} style={styles.DetailsButton}>
                     <Text style={styles.buttonTitle}>
                        <Icon type="fontisto" name="shopping-basket-add" color="#fff" size={26} />
                     </Text>
                  </Pressable>


               </View>

            </View>
         </TouchableNativeFeedback>
      </ScrollView>

   );
}
const styles = StyleSheet.create({
   priceText: {
      fontSize: 21,
      color: '#fff',
      marginTop: 7,
   },
   DetailsButton: {
      backgroundColor: '#012840',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: '5%',
      paddingRight: '5%',
      borderRadius: 12,

   },
   buttonTitle: {
      color: '#fff',
      fontSize: 16,
   },
   imageContainer: {
      borderTopRightRadius: 6,
      borderTopLeftRadius: 6,
      overflow: 'hidden',
   },
   titleStyle: {
      textAlign: 'center', fontSize: 20, paddingTop: 20, paddingBottom: 20, color: '#E9F2F1', paddingLeft: 10, paddingRight: 10,
   },
   carBottom: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      paddingBottom: 20,
   },
   cardContainer: {
      flex: 1,
      margin: 15,
      backgroundColor: '#3EB595',
      borderRadius: 6,
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,

      elevation: 8,
   },
   imageView: {
      height: 170,
      width: '100%',
   },
});
export default FlatListRenderViewScreen;
