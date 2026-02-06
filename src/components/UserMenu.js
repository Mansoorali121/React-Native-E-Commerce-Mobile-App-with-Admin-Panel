import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { MenuIcon } from '../assets/icons';

const UserMenu = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <MenuIcon />
    </TouchableOpacity>
  );
};

export default UserMenu;

const styles = StyleSheet.create({
  container: {
    height: 32,
    width: 32,
    borderRadius: 16,
    // backgroundColor: '#D9D9D9',
    alignItems:"center",
    justifyContent:"center"
  },
});
