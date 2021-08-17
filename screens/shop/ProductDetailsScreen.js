/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useLayoutEffect } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { useSelector } from 'react-redux'

function ProductDetailsScreen({ navigation }) {
   const singleProduct = useSelector(state => state.product.singleProduct)

   useLayoutEffect(() => {
      navigation.setOptions({

      })
   }, [navigation])

   return (
      <ScrollView showsVerticalScrollIndicator={false}>
         <View style={{ backgroundColor: '#06111C', position: 'relative', minHeight: Dimensions.get('window').height }}>

            <View style={{ position: 'absolute', top: 10, left: 15, zIndex: 1, }}>
               <Icon onPress={() => {
                  navigation.goBack()
               }} name="circle-with-cross" type='entypo' size={30} color="#BB2020" />
            </View>

            <Image source={{ uri: singleProduct.image }} style={{ ...{ height: 250, width: '100%', resizeMode: 'cover', }, ...style.imageShadow }} />

            <View style={{ ...{ padding: 10, }, ...style.backGroundShawod }}>
               <View style={{ flexDirection: 'column', alignItems: 'center', paddingBottom: 15, }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#fff' }}>Title:</Text>
                  <Text style={{ textAlign: 'center', color: '#fff' }}>{singleProduct.title}</Text>
               </View>

               <View style={{ flexDirection: 'column', alignItems: 'center', paddingBottom: 15, }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#fff' }}>Category Of Product:</Text>
                  <Text style={{ textTransform: 'capitalize', color: '#fff' }}>{singleProduct.category}</Text>
               </View>
               <View style={{ flexDirection: 'column', alignItems: 'center', paddingBottom: 15, }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#fff' }}>Description:</Text>
                  <Text style={{ textAlign: 'center', color: '#fff', marginBottom: 20, }}>{singleProduct.description}


                  </Text>
               </View>
            </View>
         </View>
      </ScrollView>
   )
}
const style = StyleSheet.create({
   imageShadow: {
      overflow: 'hidden',
   },
   backGroundShawod: {
      marginTop: -15,
      height: '100%',
      backgroundColor: '#06111C',
      borderRadius: 6,
      shadowColor: 'gray',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,

   }
})
export default ProductDetailsScreen
