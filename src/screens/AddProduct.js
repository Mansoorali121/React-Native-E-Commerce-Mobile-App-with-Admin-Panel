import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import MytextInput from '../components/MytextInput';
import AddProductHeader from '../components/AddProductHeader';
import AddNewProductCard from '../components/AddNewProductCard';

const AddProduct = () => {

  return (
    <View style={styles.container}>
      <AddProductHeader />

      <View style={{ marginHorizontal: 20 }}>
        <Text style={styles.addnewproduct}>Add New Product</Text>
        <Text style={styles.subtext}>
          {' '}
          Fill in the details of the new product{' '}
        </Text>
        {/* Add new Product Card Here */}
        <AddNewProductCard />
      </View>
    </View>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  addnewproduct: {
    marginTop: 20,
    fontSize: 14,
    // fontWeight: 'bold',
    fontFamily: 'Audiowide-Regular',
    marginBottom: 10,
    marginStart: 5,
  },
  subtext: { fontFamily: 'NovaFlat-Regular', color: 'gray', marginBottom: 20 },
});
