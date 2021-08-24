/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, ToastAndroid, Touchable, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import dummyData from '../../dummyData/dummyData';
import { addedOnCart, addToCart, onDelete } from '../../store/slicer/CartSlice';
import moment from 'moment';
import { setOrder } from '../../store/slicer/OrderSlice';
import Toast from 'react-native-toast-message';
function CartedProduct({ navigation }) {
   const data = useSelector(state => state.cart.totalItems);
   const TotalPrice = useSelector(state => state.cart.totalAmount);
   const allItems = useSelector(state => state.cart.items);
   const isLoggedIn = useSelector(state => state.user.loggedIn);

   const dispatch = useDispatch();

   if (data === 0) {
      return (
         <View style={{
            flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#012326',
         }}>
            <Text style={{ fontSize: 150, marginTop: '-25%' }}>🤦‍♀️</Text>
            <Text style={{ fontSize: 22, textAlign: 'center', fontWeight: 'bold', color: 'red', fontStyle: 'italic', lineHeight: 30 }}>You Don't have any product in your basket</Text>
            <Pressable >
               <Text style={{ fontSize: 22, textAlign: 'center', fontWeight: 'bold', color: 'red', fontStyle: 'italic', lineHeight: 30 }}> Go to order page for check your order history</Text>
               <Button
                  style={{ width: '100%', alignContent: 'center', alignItems: 'center', marginTop: 20 }}
                  title="Order History"
                  type="outline"
                  ViewComponent={LinearGradient} // Don't forget this!
                  linearGradientProps={{
                     colors: ['#110066', '#003F63'],
                     start: { x: 0, y: 1 },
                     end: { x: 1, y: 0.5 },
                  }}

                  titleStyle={{ color: '#fff' }}
                  buttonStyle={{ paddingTop: 7, paddingLeft: 15, paddingBottom: 7, paddingRight: 15 }}
                  activeOpacity={0.9}
                  onPress={() => navigation.navigate('Orders')}
               />
            </Pressable>
         </View>
      );
   }

   const renderView = (items) => {

      return (
         <View >
            <View>
               <View style={style.flexView}>
                  <Text style={{ width: '70%', fontWeight: '700' }}>Title: {items.item?.title}</Text>
                  <TouchableOpacity activeOpacity={0.7}>
                     <Text >
                        <Icon onPress={() => {
                           dispatch(onDelete({ id: items.item.id }));
                           ToastAndroid.show('Deleted item from cart', ToastAndroid.SHORT);
                        }} name="delete" type="material-community" color="red" size={35} />
                     </Text>
                  </TouchableOpacity>
               </View>
               <View style={style.flexView}>
                  {/* <Text style={style.textSyle}>
                     QNT: {items.item?.productQuantity}
                  </Text> */}
                  <Text style={style.textSyle}>
                     Price: ${items.item?.price}
                  </Text>
                  <Text style={style.textSyle}>
                     SubTotal: ${items.item.price}
                  </Text>
               </View>

            </View>
         </View>
      );
   };

   const orderFun = (allItems, TotalPrice, data) => {
      const nowTime = Date.now();

      const date = nowTime;
      console.log(date);

      if (isLoggedIn) {
         dispatch(setOrder({ allItems, TotalPrice, data, date }));
         dispatch(addedOnCart(null));

         ToastAndroid.show('Successfully orderd completed', ToastAndroid.TOP);
      } else {
         Toast.show({
            type: 'error',
            autoHide: true,
            text1: 'Please Login',
            text2: 'For order you have to login first',
         });
         navigation.navigate('Login');
      }









   };
   return (
      <ScrollView showsVerticalScrollIndicator={false} style={{ margin: 19 }}>

         <View style={style.orderContainer}>

            <View style={style.titleStyle}>
               <Text style={style.titleStyleOne}>
                  In Total:
               </Text>
               <Text> {' '}</Text>
               <Text style={style.titleStyleTwo}>
                  ${TotalPrice.toFixed(2)}
               </Text>
            </View>
            <Pressable >
               <Button
                  title="Order Now"
                  type="outline"
                  ViewComponent={LinearGradient} // Don't forget this!
                  linearGradientProps={{
                     colors: ['#110066', '#003F63'],
                     start: { x: 0, y: 1 },
                     end: { x: 1, y: 0.5 },
                  }}

                  titleStyle={{ color: '#fff' }}
                  buttonStyle={{ paddingTop: 7, paddingLeft: 15, paddingBottom: 7, paddingRight: 15 }}
                  activeOpacity={0.9}
                  onPress={() => orderFun(allItems, TotalPrice, data)}
               />
            </Pressable>
         </View>

         <View>
            <Text>All Items</Text>
            <FlatList keyExtractor={(item, index) => index} showsHorizontalScrollIndicator={false} data={allItems} renderItem={renderView} />
         </View>
      </ScrollView>
   );
}
const style = StyleSheet.create({
   textSyle: {
      fontSize: 13,
      fontWeight: '700',
      paddingBottom: 5,
      borderBottomWidth: 1,
      borderColor: 'gray',
   },
   flexView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      paddingBottom: 10,

   },
   titleStyleOne: {
      fontSize: 14,
      fontWeight: 'bold',

   },
   titleStyleTwo: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#003F63',
   },
   titleStyle: {
      fontSize: 16,
      fontWeight: 'bold',
      flexDirection: 'row',
      paddingTop: 7,

   },
   orderContainer: {
      marginBottom: 15,
      justifyContent: 'space-between',
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 6,
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 8,
      padding: 20,
   },
});
export default CartedProduct;
