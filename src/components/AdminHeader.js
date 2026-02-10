import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AdminHeader = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View style={styles.circle}>
          <Text style={styles.circletext}>5</Text>
        </View>
        <Text style={styles.headtext}>Pending orders</Text>
        <View style={[styles.circle, { backgroundColor: 'orange' }]}>
          <Text style={styles.circletext}>3</Text>
        </View>
        <Text style={styles.headtext}>Processing orders</Text>
        <View style={[styles.circle, { backgroundColor: 'green' }]}>
          <Text style={styles.circletext}>12</Text>
        </View>
        <Text style={styles.headtext}>Delievered orders</Text>
      </View>
    </View>
  );
};

export default AdminHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    height: 35,
    width: '100%',
    marginTop: 5,
    justifyContent: 'center',
    borderRadius:10
  },
  headtext: { fontSize: 10, fontFamily: 'NovaFlat-Regular' },
  circle: {
    height: 20,
    width: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  circletext: { color: '#fff',fontSize:10 },
});
