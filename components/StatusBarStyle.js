/* eslint-disable prettier/prettier */
import React from 'react'
import { StatusBar, View } from 'react-native'

function StatusBarStyle(props) {

   return (
      <View>
         <StatusBar backgroundColor={'#012840'} barStyle={'light-content'} {...props} />
      </View>
   )
}

export default StatusBarStyle
