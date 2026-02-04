import { StyleSheet, Text, View, Image } from 'react-native';
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
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60,
          paddingBottom: 8,
          // Line Remove
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/home-button.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Myorder"
        component={Myorder}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/trolley.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default UserStack;

const styles = StyleSheet.create({});
