import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BackArrow } from '../assets/icons';

const AddProductHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <Text style={styles.addtext}>Add New Product</Text>
        <View style={styles.imagecontainer}>
          <Image
            source={require('../assets/manager.png')}
            style={styles.image}
          />
        </View>
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
  headercontainer: { flexDirection: 'row', justifyContent: 'space-between' },
  addtext: { top: 10, fontFamily: 'NovaFlat-Regular', color: 'white' },
  imagecontainer: { backgroundColor: '#f6f9ff', padding: 5, borderRadius: 20 },
});
