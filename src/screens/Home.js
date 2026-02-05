import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import UserMenu from '../components/UserMenu';
import SearchButton from '../components/SearchButton';

const Home = () => {
  const [Itemdata,setItemData] = useState([]);
  // Function to Fetch Data for user
  const GetClothesData = async () => {
    const Clothdata = await firestore().collection('clothes').get();
    // console.log(Clothdata.docs[0].data());
    setItemData(Clothdata);
  };

  useEffect(() => {
    GetClothesData();
  }, []);
  return (
    <View style={styles.container}>
      <UserMenu/>
      <SearchButton/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});
