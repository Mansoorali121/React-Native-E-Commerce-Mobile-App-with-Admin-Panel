import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const MytextInput = ({ ...props }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textinput} {...props} />
      <View style={styles.border} />
    </View>
  );
};

export default MytextInput;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    marginBottom: 20,
  },
  textinput: {
    width: '100%',
    height: 50,
  },
  border: {
    width: '100%',
    backgroundColor: 'gray',
    height: 1,
    alignSelf: 'center',
  },
});
