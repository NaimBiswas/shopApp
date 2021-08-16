/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, RefreshControl, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import FlatListRenderViewScreen from '../../components/FlatListRenderViewScreen'
import HeaderRightOption from '../../components/HeaderRightOption'
import StatusBarStyle from '../../components/StatusBarStyle'
import dummyProduct from '../../dummyData/dummyData'
function AllProductScreen({ navigation }) {
   const [refreshing, setRefreshing] = React.useState(false);
   const [listData, setListData] = React.useState(dummyProduct);

   const onRefresh = useCallback(async () => {
      setRefreshing(true);
      if (listData.length < 10) {
         try {

            setListData(dummyProduct.concat(dummyProduct));
            setRefreshing(false)
         } catch (error) {
            console.error("Hello " + error);
         }
      } else {
         ToastAndroid.show('No more new data available', ToastAndroid.SHORT);
         setRefreshing(false)
      }


   },
      [listData.length],
   )

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
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
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
