import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BackArrow } from '../assets/icons';

const AddProductHeader = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>AddProductHeader</Text>
        <Image source={require('../assets/manager.png')} style={styles.image} />
      </View>
    </View>
  );
};

export default AddProductHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#87CEEB',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: { height: 30, width: 30 },
});
