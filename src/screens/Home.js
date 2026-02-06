import { FlatList, StyleSheet, Text, View } from 'react-native';
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
    const snapshot = await firestore().collection('clothes').get();
    const clothesList = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    // console.log(Clothdata.docs[0].data());
    setItemData(clothesList);
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
      <View style={{ marginBottom: 15 }} />
      {/* Items Card */}
      {/* <ItemsCard /> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={Itemdata}
        columnWrapperStyle={{
          marginBottom: 10,
          justifyContent: 'space-between',
        }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ItemsCard
            title={item.title}
            price={item.price}
            rating={item.rating}
            image_url={item.image_url}
          />
        )}
      />
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
