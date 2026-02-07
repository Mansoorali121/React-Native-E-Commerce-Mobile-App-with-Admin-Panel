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
  itemtitle: { textAlign: 'center', marginTop: 10, fontSize:20,fontWeight:"semibold" , fontFamily:"NovaFlat-Regular"},
  productimage: {
    height: 300,
    width: 300,
    borderRadius: 20,
    resizeMode: 'stretch',
  },
});
