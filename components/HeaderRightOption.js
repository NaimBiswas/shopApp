/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Alert, StyleSheet, Text, TouchableHighlightBase, View } from 'react-native';
import { Icon } from 'react-native-elements';

function HeaderRightOption({ data, navigation }) {

   return (

      <View>
         <Icon onPress={() => navigation.navigate('CartedProduct')} name='opencart' size={28} type='fontisto' color="#fff"
            style={{ paddingRight: 10 }}
         />
         {
            data !== 0 &&
            <View style={style.cartLable}>
               <Text style={style.LabelStyle}>{data}</Text>
            </View>

         }
      </View>
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
   },
});
export default HeaderRightOption;
