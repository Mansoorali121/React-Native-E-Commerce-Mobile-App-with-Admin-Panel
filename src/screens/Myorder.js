import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import OrderHeader from '../components/OrderHeader';
import Toptabs from '../components/Toptabs';
import Ordercard from '../components/Ordercard';
import firestore from '@react-native-firebase/firestore';

const Myorder = () => {
  const [orderData, setorderData] = useState([]);

  const Fetchorders = async () => {
    const Snapshot = await firestore().collection('orders').get();
    const orderDetails = Snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setorderData(orderDetails);

    //
  };
  useEffect(() => {
    Fetchorders();
  }, []);

  return (
    <View style={styles.container}>
      <OrderHeader />
      <Toptabs />
      {/* <Ordercard /> */}
       <FlatList
       showsVerticalScrollIndicator={false}
        data={orderData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Ordercard 
        title={item.title}
        price={item.price}
        image_url={item.image_url}
        
        />}
      />
    </View>
  );
};

export default Myorder;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 },
});
