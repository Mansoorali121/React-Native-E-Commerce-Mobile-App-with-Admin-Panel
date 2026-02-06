import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ItemsCard = () => {
  return (
    <View style={styles.container}>
      <Text>50% off</Text>
      <Image
        style={{ height: 122, width: 122, borderRadius: 20 }}
        source={{
          uri: 'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
      />
    </View>
  );
};

export default ItemsCard;

const styles = StyleSheet.create({
  container: {
    width: 174,
    height: 184,
    borderRadius: 15,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
  },
});
