import { Alert, Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import MyButton from '../components/MyButton';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import MytextInput from '../components/MytextInput';
import { add } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';

const ProductDetail = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  // Values to handle user Info for order
  const [email, setEmail] = useState('');
  const [Number, setNumber] = useState('');
  const [address, setaddress] = useState('');

  // Add Order Function
  const Addorder = () => {
    firestore().collection('orders').add({
      title: item.title,
      price: item.price,
      rating: item.rating,
      image_url: item.image_url,
      email,
      Number,
      address,
    });
    if (!email || !Number || !address) {
      Alert.alert('Please fill all the fields');
    }
    Alert.alert('order placed successfully');
    navigation.goBack('Home');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image source={{ uri: item.image_url }} style={styles.productimage} />
      </View>
      <Text style={styles.itemtitle}>{item.title}</Text>
      <View style={styles.pricecontainer}>
        <Text style={styles.price}>$ {item.price}</Text>
        <Text style={styles.rating}>⭐⭐ {item.rating} (120 Reviews)</Text>
      </View>
      <View style={styles.footercontainer}>
        <Text style={styles.descriptiontitle}> Product Description</Text>
        <Text style={styles.descriptionText}>
          Comfortable and breathable cotton T-shirt.Perfect for everyday
          wear.Available in various sizes and colors.
        </Text>
        <MytextInput
          placeholder="Enter your email "
          value={email}
          onChangeText={setEmail}
        />
        <MytextInput
          placeholder="Enter Your Number"
          value={Number}
          onChangeText={setNumber}
        />

        <MytextInput
          placeholder="Enter your address"
          value={address}
          onChangeText={setaddress}
        />
        <MyButton title="place order" onPress={Addorder} />
        <View style={{ marginTop: 20 }} />
      </View>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 },
  imagecontainer: {
    backgroundColor: '#F8F8F8',
    // backgroundColor:"red",
    alignItems: 'center',
    justifyContent: 'center',
    height: 350,
    borderRadius: 20,
  },
  itemtitle: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'semibold',
    fontFamily: 'NovaFlat-Regular',
    marginBottom: 15,
  },
  productimage: {
    height: 300,
    width: 300,
    borderRadius: 20,
    resizeMode: 'stretch',
  },
  pricecontainer: { flexDirection: 'row', justifyContent: 'space-evenly' },
  price: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Audiowide-Regular',
  },
  rating: { fontSize: 14, fontFamily: 'NovaFlat-Regular', marginStart: 30 },
  footercontainer: { marginTop: 40 },
  descriptiontitle: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Redressed-Regular',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: 'gray',
    marginStart: 5,
    marginBottom: 50,
  },
});
