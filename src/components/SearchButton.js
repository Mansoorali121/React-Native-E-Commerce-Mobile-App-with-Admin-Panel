import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SearchIconAdd } from '../assets/icons';

const SearchButton = () => {
  return (
    <View style={styles.container}>
      <SearchIconAdd/>
    </View>
  );
};

export default SearchButton;

const styles = StyleSheet.create({
  container: {
    height: 32,
    width: 32,
    borderRadius: 16,
    // backgroundColor: '#ECF0F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
