import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Ordercard = () => {
  return (
    <View style={styles.container}>
      <Text>Ordercard</Text>
    </View>
  );
};

export default Ordercard;

const styles = StyleSheet.create({
  container: { backgroundColor: 'red', height: 200, width: 200, marginTop: 20 },
});
