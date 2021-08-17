/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, RefreshControl, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import FlatListRenderViewScreen from '../../components/FlatListRenderViewScreen'
import HeaderRightOption from '../../components/HeaderRightOption'
import StatusBarStyle from '../../components/StatusBarStyle'
import dummyProduct from '../../dummyData/dummyData'
import { setProduct } from '../../store/slicer/ProductSlice'
function AllProductScreen({ navigation }) {
   const [refreshing, setRefreshing] = useState(false);
   const [listData, setListData] = useState(dummyProduct);

   const onRefresh = useCallback(async () => {
      setRefreshing(true);
      if (listData.length > 10) {
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
   const dispatch = useDispatch()

   useEffect(() => {

      dispatch(setProduct())
      navigation.setOptions({

         headerRight: () => (
            <HeaderRightOption navigation={navigation} data={0} />
         ),
      })
   }, [dispatch, navigation])

   const AllProduct = useSelector(state => state.product.products)
   console.log(AllProduct);
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
