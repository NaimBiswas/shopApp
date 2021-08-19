/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { useDrawerStatus } from '@react-navigation/drawer';
import moment from 'moment';
import { isMoment } from 'moment';
import React, { useEffect } from 'react';
import Moment from 'react-moment';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

const OrderHistoryPage = ({ navigation }) => {
   const OrderedItem = useSelector(state => state.order.order);
   const isDrawerOpen = useDrawerStatus() === 'open';
   useEffect(() => {
      navigation.setOptions({

         headerLeft: () => {

            return (<View style={{ marginRight: 15, paddingLeft: 20 }}>
               {isDrawerOpen ?
                  <Icon onPress={() => {
                     navigation.toggleDrawer();

                  }} name="toggle-left" type="font-awesome" color="#fff" size={26} />

                  :
                  <Icon onPress={() => {
                     navigation.toggleDrawer();

                  }} name="indent-right" type="antdesign" color="#fff" size={26} />

               }
            </View>);
         },
      });
   }, [isDrawerOpen, navigation]);

   return (
      <View style={styles.shawodView}>
         <FlatList showsVerticalScrollIndicator={false} data={OrderedItem} renderItem={itemData => (
            <View style={{ ...styles.itemRenderView, ...{ marginBottom: 25 } }}>

               <View style={{ ...styles.SeconditemRenderView, ...{ paddingTop: 20, paddingBottom: 25 } }}>


                  <Text style={{ fontSize: 16, width: '60%', textAlign: 'left' }}>
                     {moment(itemData.item.date).format('DD/MMM/YYYY, hh:mm')}
                  </Text>







                  <Text style={{ fontSize: 16, width: '40%', textAlign: 'right', fontWeight: 'bold' }}>Total: $ {itemData.item.totalPrice.toFixed(2)}</Text>
               </View>
               <View style={{ paddingBottom: 20 }}>
                  {
                     itemData.item.items.map((itemDetails, index) => (
                        <View key={index} style={styles.SeconditemRenderView}>
                           <Text style={{ fontSize: 16, width: '60%' }}>{itemDetails.title}</Text>
                           <Text
                              style={{ fontSize: 16, textAlign: 'right', width: '40%' }}
                           >Price: ${itemDetails.price.toFixed(2)}</Text>
                        </View>
                     ))
                  }
               </View>
               {/* <View style={{ paddingBottom: 10, margin: 15, }}>



               </View> */}
            </View>
         )} />
         <Button title="Download" color="#3EB595" />
      </View>
   );
};

export default OrderHistoryPage;

const styles = StyleSheet.create({
   shawodView: {
      padding: 15,
      marginBottom: 30,
   },
   SeconditemRenderView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 15,
      marginLeft: 15,
      marginRight: 15,
   },
   itemRenderView: {

      backgroundColor: '#fff',
      borderRadius: 6,
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.6,
      shadowRadius: 6,
      elevation: 4,
   },
});
