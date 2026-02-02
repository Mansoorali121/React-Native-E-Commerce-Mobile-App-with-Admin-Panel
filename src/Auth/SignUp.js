import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bg.png')}
        style={styles.imageBackground}
      ></ImageBackground>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: { flex: 1 },
  imageBackground: { height: '100%', paddingHorizontal: 20 },
});
