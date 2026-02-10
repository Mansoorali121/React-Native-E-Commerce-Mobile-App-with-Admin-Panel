import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ItemsCard = ({ title, price, rating, image_url , item
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image
        style={{
          height: 122,
          width: 122,
          borderRadius: 20,
          resizeMode: 'stretch',
        }}
        source={{ uri: image_url }}
      />
      <View style={{ flexDirection: 'row', gap: 15 }}>
        <Text style={styles.price}>Price: ${price}</Text>
        <Text style={styles.rating}>Rating {rating}</Text>
      </View>
      <TouchableOpacity
        style={styles.viewmorebutton}
        onPress={() => navigation.navigate('ProductDetail',{item})}
      >
        <Text style={styles.morebtntext}>order </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemsCard;

const styles = StyleSheet.create({
  container: {
    width: 159,
    height: 204,
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
  price: { fontFamily: 'NovaFlat-Regular', fontSize: 12, marginTop: 5 },
  rating: { fontSize: 12, fontFamily: 'Redressed-Regular', marginTop: 2 },
  viewmorebutton: {
    backgroundColor: '#87CEEB',
    height: 20,
    width: 70,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
  morebtntext: { fontSize: 12, fontFamily: 'NovaFlat-Regular', color: 'red' },
});
