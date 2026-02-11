import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminTabs from '../components/AdminTabs';
import Adminordercard from '../components/Adminordercard';
import firestore from '@react-native-firebase/firestore';

const AdminHome = () => {
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
      <View style={styles.adminhome}>
        <Text style={styles.admintext}>Admin Home</Text>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <AdminHeader />
        <AdminTabs />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 10 }}
        data={orderData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Adminordercard
        address={item.address}
        Number={item.Number}
        title={item.title}
        price={item.price}
        
        />}
      />
    </View>
  );
};

export default AdminHome;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  adminhome: {
    backgroundColor: '#87CEEB',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  admintext: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Audiowide-Regular',
  },
});
