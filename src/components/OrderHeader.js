import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { OrderIconn } from '../assets/icons';

const OrderHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.ordertext}>My Orders</Text>
      <OrderIconn />
    </View>
  );
};

export default OrderHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  ordertext: {
    fontSize: 24,
    fontFamily: 'Audiowide-Regular',
    marginBottom: 20,
  },
});
