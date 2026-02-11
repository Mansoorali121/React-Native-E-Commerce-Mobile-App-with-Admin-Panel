import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Adminordercard = ({ address, Number, title, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userOrdercard}>
        <View style={styles.ordertextcontainer}>
          <Text style={{ fontFamily: 'Raleway-Italic-VariableFont_wght' }}>
            Order ID:{' '}
            <Text style={{ fontFamily: 'Redressed-Regular' }}>{Number}</Text>
          </Text>
          <Text style={{ fontFamily: 'Raleway-Italic-VariableFont_wght' }}>
            Total:{' '}
            <Text style={{ fontFamily: 'Redressed-Regular' }}>{price}</Text>
          </Text>
        </View>
        <View style={styles.ordertextcontainer}>
          <Text style={{ fontFamily: 'Audiowide-Regular', fontSize: 10 }}>
            {address}
          </Text>
          <Text style={{ fontFamily: 'Raleway-Italic-VariableFont_wght' }}>
            Status:{' '}
            <Text
              style={{
                color: 'red',
                fontWeight: 'bold',
              }}
            >
              Processing
            </Text>
          </Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity style={styles.editorder}>
            <Text>Edit order</Text>
          </TouchableOpacity>
          <View style={styles.chanebtn}>
            <Text style={{ color: 'red' }}>Change Status </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Adminordercard;

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  userOrdercard: {
    backgroundColor: '#f6f9ff',
    height: 200,
    width: '100%',
    borderRadius: 12,
  },
  ordertextcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  chanebtn: {
    height: 25,
    width: 100,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  editorder: {
    height: 25,
    width: 100,
    backgroundColor: '#f6f9ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  buttoncontainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  title: { left: 220, fontFamily: 'NovaFlat-Regular', fontSize: 12 },
});
