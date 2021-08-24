/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllProductScreen from '../screens/shop/AllProductScreen';
import ProductDetails from '../screens/shop/ProductDetailsScreen';
import CartedProduct from '../screens/shop/CartedProduct';
import { createDrawerNavigator, useDrawerStatus } from '@react-navigation/drawer';
import OrderHistoryPage from '../screens/shop/OrderHistoryPage';
import { Icon } from 'react-native-elements';
import Registration from '../screens/user/Registration';
import LoginPage from '../screens/user/LoginPage';
import ProfillePage from '../screens/user/ProfillePage';
import { useSelector } from 'react-redux';
import { color } from 'react-native-reanimated';

function MainNav({ navigation }) {
   const [toggleCross, setToggleCross] = useState(true)
   const Stack = createNativeStackNavigator();
   const isDrawerOpen = useDrawerStatus() === 'open';



   return (


      <Stack.Navigator
      >
         <Stack.Screen name="AllProducts" component={AllProductScreen}
            options={{

               title: 'All Products',
               headerLargeStyle: {
               },
               headerStyle: {
                  backgroundColor: '#175973',

               },
               headerTintColor: '#fff',

               headerLeft: () => {

                  return (<View style={{ marginRight: 15, }}>
                     {isDrawerOpen ?
                        <Icon onPress={() => {
                           navigation.toggleDrawer()

                        }} name='toggle-left' type="font-awesome" color="#fff" size={26} />

                        :
                        <Icon onPress={() => {
                           navigation.toggleDrawer()

                        }} name='indent-right' type="antdesign" color="#fff" size={26} />

                     }

                  </View>)
               }
            }}


         />
         <Stack.Screen name="ProductDetails" component={ProductDetails}

            options={{

               title: 'Details',
               headerStyle: {
                  backgroundColor: '#175973',

               },
               headerTintColor: '#fff',
               headerShown: false,
            }}
         />
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



   );
}
const DrawerStack = createDrawerNavigator();

const DrawerNav = (params) => {

   const isLoggedIn = useSelector(state => state.user.loggedIn)

   return (
      <NavigationContainer>
         <DrawerStack.Navigator
            screenOptions={({ route }) => ({

               drawerIcon: ({ focused, color, size }) => {
                  let iconName;
                  let type;
                  if (route.name === 'Feed') {
                     iconName = 'windows';
                     type = 'antdesign'
                  } else if (route.name === 'Orders') {
                     iconName = 'printer';
                     type = 'antdesign'
                  } else if (route.name === 'Registration') {
                     iconName = 'add-user';
                     type = 'entypo'

                  } else if (route.name === 'Login') {
                     iconName = 'login';
                     type = 'entypo'

                  } else if (route.name === 'LogOut') {
                     iconName = 'log-out';
                     type = 'entypo'

                  } else if (route.name === 'Profile') {
                     iconName = 'user';
                     type = 'entypo'

                  }

                  return <Icon name={iconName} type={type} size={25} color={focused ? 'red' : '#FFF'} />;
               },
               drawerStyle: {
                  backgroundColor: '#202731',
                  paddingTop: 10,

               },
               drawerActiveBackgroundColor: 'yellow',
               drawerInactiveTintColor: '#fff',
               drawerActiveTintColor: '#000',
               drawerType: 'slide',
               drawerHideStatusBarOnOpen: false,
               drawerStatusBarAnimation: 'fade',
            })}

         >
            <DrawerStack.Screen options={{
               headerShown: false,

               drawerLabel: 'Feed',
               drawerLabelStyle: {
                  fontSize: 16,
                  fontWeight: 'bold'
               },


            }} name="Feed" component={MainNav} />



            <DrawerStack.Screen name="Orders" component={OrderHistoryPage}

               options={{

                  headerStyle: {
                     backgroundColor: '#175973',

                  },
                  headerTintColor: '#fff',
                  drawerLabel: 'Order History',
                  drawerLabelStyle: {
                     fontSize: 16,
                     fontWeight: 'bold'
                  },
                  title: "Your Order History",

               }}

            />
            {
               !isLoggedIn ?
                  <>



                     <DrawerStack.Screen name="Registration" component={Registration}

                        options={{

                           headerStyle: {
                              backgroundColor: '#175973',

                           },
                           headerTintColor: '#fff',
                           headerShown: false,
                           drawerLabel: 'Registration',
                           drawerLabelStyle: {
                              fontSize: 16,
                              fontWeight: 'bold'
                           },
                        }}

                     />
                     <DrawerStack.Screen name="Login" component={LoginPage}

                        options={{

                           headerStyle: {
                              backgroundColor: '#175973',

                           },
                           headerTintColor: '#fff',
                           headerShown: false,
                           drawerLabel: 'Login',
                           drawerLabelStyle: {
                              fontSize: 16,
                              fontWeight: 'bold'
                           },
                        }}

                     />

                  </>

                  :
                  <>
                     <DrawerStack.Screen name="Profile" component={ProfillePage}

                        options={{

                           headerStyle: {
                              backgroundColor: '#175973',

                           },
                           headerTintColor: '#fff',
                           headerShown: true,
                           drawerLabel: 'Profile',
                           drawerLabelStyle: {
                              fontSize: 16,
                              fontWeight: 'bold'
                           },
                        }}

                     />

                     <DrawerStack.Screen name="LogOut" component={ProductDetails}

                        options={{

                           headerStyle: {
                              backgroundColor: '#175973',

                           },

                           headerTintColor: '#000',
                           headerShown: false,
                           drawerLabel: 'Log Out',
                           drawerLabelStyle: {
                              fontSize: 16,
                              fontWeight: 'bold',
                           },

                        }}

                     />

                  </>
            }











         </DrawerStack.Navigator>
      </NavigationContainer>
   );
};



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
   },
});
export default DrawerNav;
