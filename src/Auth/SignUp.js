import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import MyButton from '../components/MyButton';
import MytextInput from '../components/MytextInput';
import SocialMedia from '../components/SocialMedia';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const SignUp = () => {
  const navigation = useNavigation();
  // State to SignUp User
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [userInfo, setUserInfo] = useState([]);

  // Function to Signup through Firebase
  const Signupuser = async() => {
    if (!name || !email || !Password) {
      Alert.alert('Error', 'All fields are required');
    }
    try {
      const userData = await auth().createUserWithEmailAndPassword(email, Password);
      setUserInfo(userData);
      Alert.alert('Success', 'Account Created Successfully');
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      Alert.alert('Sign Up Error', error.messaage);
    }
  };

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
          <MytextInput
            placeholder="Enter Name"
            value={name}
            onChangeText={setName}
          />

          <MytextInput
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
          />

          <MytextInput
            placeholder="Enter Password"
            secureTextEntry
            value={Password}
            onChangeText={setPassword}
          />
          <Text
            style={styles.donthaveText}
            onPress={() => navigation.navigate('Login')}
          >
            Already have an Account?
          </Text>
          <MyButton title="Signup" onPress={Signupuser} />
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
