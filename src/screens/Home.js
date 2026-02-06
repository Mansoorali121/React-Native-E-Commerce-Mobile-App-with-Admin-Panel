import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import SearchButton from '../components/SearchButton';
import UserMenu from '../components/UserMenu';
import Mycards from '../components/Mycards';
import ItemsCard from '../components/ItemsCard';

const Home = () => {
  const [Itemdata, setItemData] = useState([]);
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
      <View style={styles.header}>
        <UserMenu />
        <SearchButton />
      </View>
      {/* Add Text */}
      <Text style={styles.hellotext}>Hello Folla</Text>
      <Text style={styles.helloblurtext}>Let's start shopping</Text>
      {/* My Card  */}
      <Mycards />
      <View style={{marginBottom:15}}/>
      {/* Items Card */}
      <ItemsCard />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 17 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  hellotext: {
    fontWeight: 'semibold',
    fontSize: 20,
    color: '#000000',
    fontFamily: 'NovaFlat-Regular',
    marginTop: 20,
    marginBottom: 6,
  },
  helloblurtext: { fontFamily: 'Raleway-VariableFont_wght', fontSize: 12 },
});
