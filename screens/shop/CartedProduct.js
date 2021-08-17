/* eslint-disable prettier/prettier */
import React from 'react'
import { FlatList, Pressable, StyleSheet, Text, Touchable, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import { Button, Icon } from 'react-native-elements';
import { useSelector } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import dummyData from '../../dummyData/dummyData'
function CartedProduct() {
   const data = useSelector(state => state.cart.totalItems)
   const TotalPrice = useSelector(state => state.cart.totalAmount)
   const allItems = useSelector(state => {
      for (const key in state.cart.items) {
         const convertToArray = []
         convertToArray.push({
            id: key,
            productTitle: state.cart.items[key].title,
            productPrice: state.cart.items[key].price,
            productQuantity: state.cart.items[key].quantity,
            subTotal: state.cart.items.subTotal
         })
         return convertToArray;
      }
   })
   console.log(allItems)
   if (data === 0) {
      return (
         <View style={{
            flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#012326'
         }}>
            <Text style={{ fontSize: 150, marginTop: '-25%', }}>🤦‍♀️</Text>
            <Text style={{ fontSize: 22, textAlign: 'center', fontWeight: 'bold', color: 'red', fontStyle: 'italic', lineHeight: 30 }}>You Don't have any product in your basket</Text>
         </View>
      )
   }

   const renderView = (items) => {
      // console.log(items.item);
      return (
         <View>
            <View>
               <View style={style.flexView}>
                  <Text>Title: {items.item?.productTitle}</Text>
                  <TouchableOpacity activeOpacity={.7}>
                     <Text>
                        <Icon name='delete' type='material-community' color='red' size={35} />
                     </Text>
                  </TouchableOpacity>
               </View>
               <View style={style.flexView}>
                  <Text style={style.textSyle}>
                     QNT: {items.item?.productQuantity}
                  </Text>
                  <Text style={style.textSyle}>
                     Price: ${items.item?.productPrice}
                  </Text>
                  <Text style={style.textSyle}>
                     SubTotal: ${items.item.subTotal}
                  </Text>
               </View>

            </View>
         </View>
      )
   }

   return (
      <View style={{ margin: 19 }}>
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
            <Pressable onPress={() => ""}>
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
                  buttonStyle={{ paddingTop: 10, paddingLeft: 15, paddingBottom: 10, paddingRight: 15, }}
                  activeOpacity={0.9}
               />
            </Pressable>
         </View>
         <View>
            <Text>All Items</Text>
            <FlatList data={allItems} renderItem={renderView} />
         </View>
      </View>
   )
}
const style = StyleSheet.create({
   textSyle: {
      fontSize: 18,
      fontWeight: '700',

   },
   flexView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
   },
   titleStyleOne: {
      fontSize: 18,
      fontWeight: 'bold',
   },
   titleStyleTwo: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#003F63'
   },
   titleStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      flexDirection: 'row',
      paddingTop: 10
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
   }
})
export default CartedProduct
