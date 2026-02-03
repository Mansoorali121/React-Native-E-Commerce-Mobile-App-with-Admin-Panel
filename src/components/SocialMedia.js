import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SocialMedia = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/SocialMediaIcons/facebook.png')}
        style={styles.socialimage}
      />
      <Image
        source={require('../assets/SocialMediaIcons/twitter.png')}
        style={styles.twittericon}
      />
      <Image
        source={require('../assets/SocialMediaIcons/google.png')}
        style={styles.socialimage}
      />
    </View>
  );
};

export default SocialMedia;

const styles = StyleSheet.create({
  socialimage: { height: 50, width: 50 },
  container: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  twittericon: { height: 60, width: 60, marginTop: 15 },
});
