import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MyButton from '../components/MyButton';
import MytextInput from './MytextInput';

const AddNewProductCard = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 10 }}>
        <MytextInput placeholder="Product Name" />
        <MytextInput placeholder="Description" />
        <MytextInput placeholder="Price" />
        <MytextInput placeholder="rating" />
        <MytextInput placeholder="Image Url" />
      </View>
      <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.savebtn}>
          <Text style={styles.saveproduct}> Save Product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelbtn}>
          <Text style={styles.calcelProduct}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddNewProductCard;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 7 },
  savebtn: {
    backgroundColor: 'skyblue',
    height: 40,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 80,
  },
  cancelbtn: {
    backgroundColor: '#eaedef',
    height: 40,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveproduct: { color: '#fff', fontFamily: 'Audiowide-Regular' },
  calcelProduct: { color: 'gray', fontFamily: 'Audiowide-Regular' },
});
