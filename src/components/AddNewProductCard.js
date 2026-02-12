import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import MyButton from '../components/MyButton';
import MytextInput from './MytextInput';
import firestore from "@react-native-firebase/firestore"
const AddNewProductCard = () => {
  // Firebase Data Add State
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [Price, setPrice] = useState('');
  const [Rating, setRating] = useState('');
  const [Image, setImage] = useState('');

  // Firebase Function to Add Data
  const AddData = async() => {
    const Data = firestore().collection
  }
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 10 }}>
        <MytextInput
          placeholder="Product Name"
          value={name}
          onChangeText={setName}
        />
        <MytextInput
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <MytextInput
          placeholder="Price"
          value={Price}
          onChangeText={setPrice}
        />
        <MytextInput
          placeholder="rating"
          value={Rating}
          onChangeText={setRating}
        />
        <MytextInput
          placeholder="Image Url"
          value={Image}
          onChangeText={setImage}
        />
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
