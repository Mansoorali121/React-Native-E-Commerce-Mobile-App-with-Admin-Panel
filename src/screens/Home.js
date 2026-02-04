// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Myorder from './Myorder';
// import Home from '../screens/Home';

// const Tab = createBottomTabNavigator();

// const UserStack = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />

//       <Tab.Screen name="Myorder" component={Myorder} />
//     </Tab.Navigator>
//   );
// };

// export default UserStack;

// const styles = StyleSheet.create({});


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:"#fff"}
})