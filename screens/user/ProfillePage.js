/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View, Alert, RefreshControlBase, RefreshControl, FlatList, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import UserProductFlatList from '../../components/userCom/UserProductFlatList';

const ProfillePage = ({ navigation }) => {
   const [userData, setUserData] = useState(Object);
   const [userProduct, setUserProduct] = useState(Array);
   const userId = useSelector(state => state.user.userId);
   const [refreshing, setRefreshing] = useState(false);
   const [isLoading, setIsLoading] = useState(false)

   useEffect(() => {
      setIsLoading(true)
      fetch('https://shop-bc.herokuapp.com/api/profile', {
         method: 'GET',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            id: userId,
         },
      }).then(res => res.json())
         .then((result) => {
            setIsLoading(false)
            if (result.succ === true) {
               setUserData(result.data);
               setUserProduct(result.product);
            }
         }).catch(err => {
            setIsLoading(false)
            console.log(err);
            Toast.show({
               type: 'error',
               autoHide: true,
               text1: 'Something went wrong',
               text2: 'Try again later',
            });
         });

   }, [userId]);







   const onRefresh = () => {
      setRefreshing(true);
      fetch('https://shop-bc.herokuapp.com/api/profile', {
         method: 'GET',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            id: userId,
         },
      }).then(res => res.json())
         .then((result) => {

            if (result.succ === true) {
               setUserData(result.data);
               setUserProduct(result.product);
            }
            setRefreshing(false);
         }).catch(err => {
            console.log(err);
            Toast.show({
               type: 'error',
               autoHide: true,
               text1: 'Something went wrong',
               text2: 'Try again later',
            });
            setRefreshing(false);
         });
   };



   return (
      <ScrollView showsHorizontalScrollIndicator={false}
         nestedScrollEnabled={true}
         refreshControl={
            <RefreshControl
               onRefresh={onRefresh}
               refreshing={refreshing}
            />
         }
      >
         {
            isLoading ?
               <View style={{ backgroundColor: "#242734", height: Dimensions.get('screen').height }}>

                  <ActivityIndicator style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: -80 }} size="large" color="#fff" />

               </View>
               :

               <View style={styles.profileContainer} >

                  <View>
                     <Image source={{ uri: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png' }} style={styles.profileImage} />
                  </View>
                  <View>
                     <Text style={styles.nameStyle} >{userData.name}</Text>
                     <Text style={styles.emailStyle} >{userData.email}</Text>
                  </View>
                  <View style={styles.badgeStyle}>
                     <View>
                        <Text style={styles.badgeTitle}>Product</Text>
                        <Text style={styles.badgeItemStyle} >{userProduct.length}</Text>
                     </View>
                     <Text style={{ color: '#293443', fontSize: 30, paddingTop: 2 }}>|</Text>
                     <View>
                        <Text style={styles.badgeTitle}>Sales</Text>
                        <Text style={styles.badgeItemStyle} >2</Text>
                     </View>
                     <Text style={{ color: '#293443', fontSize: 30, paddingTop: 2 }}>|</Text>
                     <View>
                        <Text style={styles.badgeTitle}>Favorite</Text>
                        <Text style={styles.badgeItemStyle} >40</Text>
                     </View>
                  </View>
                  <View style={styles.productContainer}>
                     <View style={styles.productContainerTop} >
                        <Text style={styles.productHeaderTitle} >All Prodcut</Text>
                        <Text onPress={() => {
                           navigation.navigate('NewProduct');
                        }} style={styles.newProductTitle} >Add New Product</Text>
                     </View>

                     <FlatList
                        keyExtractor={(item, index) => item._id}
                        horizontal={true}
                        data={userProduct}
                        renderItem={itemData =>
                           <UserProductFlatList data={itemData.item} />
                        } />

                  </View>
               </View>
         }
      </ScrollView>
   );
};

export default ProfillePage;

const styles = StyleSheet.create({
   badgeItemStyle: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',

   },
   badgeTitle: {
      color: '#fff',
      fontSize: 16,
      textTransform: 'uppercase',
      paddingBottom: 3,
   },
   badgeStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      padding: 10,
   },
   newProductTitle: {

      paddingTop: 20,
      color: '#fff',
      paddingRight: 20,
      fontSize: 16,
   },
   productContainerTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   productHeaderTitle: {
      textAlign: 'left',
      paddingTop: 20,
      color: '#f4f4f4',
      paddingLeft: 20,
      fontSize: 16,
   },
   productContainer: {
      shadowColor: '#DCDCDC',
      shadowOpacity: 0.1,
      shadowRadius: 10.00,
      elevation: 10,
      backgroundColor: '#242734',
      minHeight: 64,
      borderRadius: 6,
      margin: 15,
      width: '90%',
   },
   emailStyle: {
      fontSize: 14,
      color: '#FCFBFF',
      textAlign: 'center',
      paddingBottom: '2%',
   },
   nameStyle: {
      marginTop: -10,
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FCFBFF',
      textAlign: 'center',
      letterSpacing: 2,
      paddingBottom: '2%',
   },
   profileImage: {
      height: 140,
      width: 150,
      resizeMode: 'contain',
      borderWidth: 1,
      borderColor: '#F3F3F7',
      marginTop: '15%',
   },
   profileContainer: {
      backgroundColor: '#242734',
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: Dimensions.get('window').height,
      marginBottom: 40,
   },
});
