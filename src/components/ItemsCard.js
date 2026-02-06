import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ItemsCard = ({ title, price, rating, image_url }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image
        style={{ height: 122, width: 122, borderRadius: 20 }}
        source={{ uri: image_url }}
      />
      <View style={{ flexDirection: 'row', gap: 15 }}>
        <Text style={styles.price}>Price: ${price}</Text>
        <Text style={styles.rating}>Rating {rating}</Text>
      </View>
    </View>
  );
};

export default ItemsCard;

const styles = StyleSheet.create({
  container: {
    width: 159,
    height: 184,
    borderRadius: 22,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    marginBottom: 5,
    marginTop: 5,
    fontFamily: 'Audiowide-Regular',
  },
  price: { fontFamily: 'NovaFlat-Regular', fontSize: 12 },
  rating: { fontSize: 12, fontFamily: 'Redressed-Regular' },
});
