import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ProductDetail = ({ route }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image source={{ uri: item.image_url }} style={styles.productimage} />
      </View>
      <Text style={styles.itemtitle}>{item.title}</Text>
      <View style={styles.pricecontainer}>
        <Text style={styles.price}>$ {item.price}</Text>
        <Text style={styles.rating}>{item.rating} (120 Reviews)</Text>
      </View>
      <View>
        <Text>Product Description</Text>
        
      </View>
    </View>
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
    fontSize: 20,
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
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Audiowide-Regular',
  },
  rating: { fontSize: 16, fontFamily: 'NovaFlat-Regular' },
});
