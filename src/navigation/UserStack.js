import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ProductDetail from '../screens/ProductDetail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Myorder from '../screens/Myorder';

const Tab = createBottomTabNavigator();
const UserStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Langar-Regular',
          fontWeight: 300,
        },
        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={100}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Myorder"
        component={Myorder}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default UserStack;

const styles = StyleSheet.create({});
