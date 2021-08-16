/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllProductScreen from '../screens/shop/AllProductScreen';
import ProductDetails from '../screens/shop/ProductDetailsScreen';
import CartedProduct from '../screens/shop/CartedProduct';


function MainNav() {
   const Stack = createNativeStackNavigator();
   return (

      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="AllProducts" component={AllProductScreen}
               options={{
                  title: 'All Products',
                  headerStyle: {
                     backgroundColor: '#175973',
                  },
                  headerTintColor: '#fff',

               }}


            />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="CartedProduct" component={CartedProduct}
               options={{
                  title: 'Your Cart',
                  headerStyle: {
                     backgroundColor: '#175973',
                  },
                  headerTintColor: '#fff',

               }}

            />
         </Stack.Navigator>
      </NavigationContainer>

   );
}
const style = StyleSheet.create({
   cartLable: {
      position: 'absolute',
      top: -8,
      left: -10,
   },
   LabelStyle: {
      fontSize: 14,
      color: '#fff',
      paddingLeft: 10,
      paddingBottom: 5,
      paddingTop: 5,
      paddingRight: 10,
      backgroundColor: 'red',
      borderRadius: 25,
   }
})
export default MainNav;
