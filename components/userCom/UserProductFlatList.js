/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';


const UserProductFlatList = ({ data }) => {

   return (

      <View key={data._id} style={styles.container}>
         <Image source={{ uri: data.imageURL }}
            style={{ height: 260, borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 20, width: '100%', resizeMode: 'cover', backgroundColor: '#fff' }}
         />
         <View style={styles.detailsContainer}>
            <Text style={styles.titleStyle}>{data.title}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
               <Text style={styles.priceStyle}>$ {data.price}</Text>
               <Text style={styles.priceStyle}>
                  <Icon type="material-icons" name="delete-forever" color='yellow' size={28} />
               </Text>

            </View>
         </View>
      </View>

   );
};

export default UserProductFlatList;

const styles = StyleSheet.create({
   priceStyle: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      letterSpacing: 1,
      textAlign: 'left',
      padding: 10,

   },
   titleStyle: {

      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      letterSpacing: 1,
      textAlign: 'center',
      padding: 10,
   },
   container: {
      paddingTop: '10%',
      paddingBottom: 50,
      width: 300,
      padding: 15,
   },
   detailsContainer: {
      backgroundColor: '#003F63',
      width: '100%',

      padding: 10,
      minHeight: 100,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,

   },
});
