/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import FlatListRenderViewScreen from '../../components/FlatListRenderViewScreen'
import HeaderRightOption from '../../components/HeaderRightOption'
import StatusBarStyle from '../../components/StatusBarStyle'
import dummyProduct from '../../dummyData/dummyData'
function AllProductScreen({ navigation }) {
   // const [data, setData] = useState()

   // fetch('https://fakestoreapi.com/products', {
   //    method: 'GET',
   // }).then(response => response.json()).then(data => setData(data)).catch(err => console.log(err));

   useEffect(() => {
      navigation.setOptions({

         headerRight: () => (
            <HeaderRightOption navigation={navigation} data={0} />
         ),
      })
   }, [navigation])

   return (
      <View>
         <StatusBarStyle />

         <FlatList
            initialNumToRender={10}

            data={dummyProduct}
            renderItem={itemData => (
               <FlatListRenderViewScreen navigation={navigation} itemData={itemData.item} />
            )} />
      </View>
   )
}
const styles = StyleSheet.create({

})
export default AllProductScreen
