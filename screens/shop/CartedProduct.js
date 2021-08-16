/* eslint-disable prettier/prettier */
import React from 'react'
import { Text, View } from 'react-native'

function CartedProduct() {
   return (
      <View style={{
         flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#012326'
      }}>
         <Text style={{ fontSize: 150, marginTop: '-25%', }}>🤦‍♀️</Text>
         <Text style={{ fontSize: 22, textAlign: 'center', fontWeight: 'bold', color: 'red', fontStyle: 'italic', lineHeight: 30 }}>You Don't have any product in your basket</Text>
      </View>
   )
}

export default CartedProduct
