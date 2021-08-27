/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, RefreshControl, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import FlatListRenderViewScreen from '../../components/FlatListRenderViewScreen'
import HeaderRightOption from '../../components/HeaderRightOption'
import StatusBarStyle from '../../components/StatusBarStyle'

import { setProduct } from '../../store/slicer/ProductSlice'
function AllProductScreen({ navigation }) {
   const [refreshing, setRefreshing] = useState(false);
   const AllProduct = useSelector(state => state.product.products)
   const [listData, setListData] = useState(AllProduct);
   const itemLength = useSelector(state => state.cart.totalItems)

   const onRefresh = useCallback(async () => {
      setRefreshing(true);
      if (listData.length > 10) {
         try {
            setListData(AllProduct.concat(AllProduct));
            setRefreshing(false)
         } catch (error) {
            console.error("Hello " + error);
         }
      } else {
         ToastAndroid.show('No more new data available', ToastAndroid.SHORT);
         setRefreshing(false)
      }


   },
      [AllProduct, listData.length],
   )
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(setProduct())
      navigation.setOptions({

         headerRight: () => (
            <HeaderRightOption navigation={navigation} data={itemLength} />
         ),


      })
   }, [dispatch, itemLength, navigation])


   return (
      <View>
         <StatusBarStyle />

         <FlatList
            initialNumToRender={10}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            data={AllProduct}
            renderItem={itemData => (
               <FlatListRenderViewScreen navigation={navigation} itemData={itemData.item} />
            )} />
      </View>
   )
}
const styles = StyleSheet.create({

})
export default AllProductScreen
