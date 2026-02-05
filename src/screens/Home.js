import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

const Home = () => {
  // Function to Fetch Data for user
  const GetClothesData = async () => {
    const Clothdata = await firestore().collection('clothes').get();
    console.log(Clothdata);
  };

  useEffect(() => {
    GetClothesData();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});
