import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import OrderHeader from '../components/OrderHeader';

const Myorder = () => {
  return (
    <View style={styles.container}>
      <OrderHeader />
    </View>
  );
};

export default Myorder;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal:20 },
});
