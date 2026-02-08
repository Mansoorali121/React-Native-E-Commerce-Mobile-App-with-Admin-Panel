import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import OrderHeader from '../components/OrderHeader';
import Toptabs from '../components/Toptabs';

const Myorder = () => {
  return (
    <View style={styles.container}>
      <OrderHeader />
      <Toptabs />
    </View>
  );
};

export default Myorder;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 },
});
