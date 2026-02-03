import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import MyButton from '../components/MyButton';
import MytextInput from '../components/MytextInput';
import SocialMedia from '../components/SocialMedia';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/imgbg.jpg')}
        style={styles.imageBackground}
      >
        <Image
          source={require('../assets/iconlogo.png')}
          style={styles.headerimage}
        />
        <Text style={styles.title}> Commerce App </Text>
        {/* Form Container */}
        <View style={styles.formContainer}>
          <MytextInput placeholder="Enter Email" />
          <MytextInput placeholder="Enter Name" />

          <MytextInput placeholder="Enter Password" secureTextEntry />
          <Text
            style={styles.donthaveText}
            onPress={() => navigation.navigate('Login')}
          >
            Already have an Account?
          </Text>
          <MyButton title="Signup" />
          <Text style={styles.ortext}>OR</Text>
          {/* Add Social Media Icons */}
          <SocialMedia />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: { flex: 1 },
  imageBackground: {
    height: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerimage: {
    height: 50,
    width: 90,
    position: 'absolute',
    right: 20,
    top: 20,
  },
  title: { fontSize: 30, marginTop: 80, fontFamily: 'Audiowide-Regular' },
  formContainer: {
    height: 450,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  donthaveText: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 15,
    fontFamily: 'NovaFlat-Regular',
  },
  ortext: {
    fontSize: 20,
    color: 'gray',
    marginTop: 20,
    fontFamily: 'Audiowide-Regular',
  },
});
