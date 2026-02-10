import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Ordercard = ({title, price, image_url}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardcontainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.order}>
            Order ID <Text style={styles.orderid}>#12345</Text>
          </Text>
          <TouchableOpacity style={styles.processingButton}>
            <Text style={styles.btntext}>Processing</Text>
          </TouchableOpacity>
          {/* <Text style={{flex:1}}> Processing</Text> */}
        </View>

        <Image
          source={{uri:image_url}}
          style={styles.image}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.title}>{title} </Text>
          <Text style={styles.price}> Total Price {price}</Text>
        </View>
        <View style={styles.trackorder}>
          <TouchableOpacity style={styles.trackingbutton}>
            <Text style={{ color: '#000' }}>Track Order</Text>

          </TouchableOpacity>
         
        </View>
      </View>
    </View>
  );
};

export default Ordercard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    height: 200,
    width: 320,
    marginTop: 20,
    borderRadius: 20,
  },
  cardcontainer: { paddingHorizontal: 20, marginTop: 10 },
  image: { height: 80, width: 80, marginTop: 10, marginBottom: 5, resizeMode:"stretch", borderRadius:14 },
  order: { fontFamily: 'NovaFlat-Regular', fontSize: 14 },
  orderid: { color: 'green', fontWeight: 'semibold' },
  processingButton: {
    backgroundColor: '#f3dcd0',
    borderRadius: 12,
    padding: 2,
    height: 20,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntext: { color: 'gray', fontSize: 12, fontFamily: 'Langar-Regular' },
  title: { fontSize: 16, fontFamily: 'Redressed-Regular', fontWeight: '300',left:10 },
  price: { fontSize: 16, fontFamily: 'Redressed-Regular', fontWeight: '300' },
  trackorder: { left: 180, top: 10 },
  trackingbutton: {
    height: 30,
    width: 100,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  },
});
