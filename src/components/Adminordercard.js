import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Adminordercard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userOrdercard}>
        <View style={styles.ordertextcontainer}>
          <Text>
            Order ID: <Text>#1234</Text>
          </Text>
          <Text>
            Total: <Text>2320</Text>
          </Text>
        </View>
        <View style={styles.ordertextcontainer}>
          <Text>Ali khan</Text>
          <Text>
            Status: <Text>Processing</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Adminordercard;

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  userOrdercard: {
    backgroundColor: '#f6f9ff',
    height: 200,
    width: '100%',
    borderRadius: 12,
  },
  ordertextcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
