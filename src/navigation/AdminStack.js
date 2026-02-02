import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ProductDetail from '../screens/ProductDetail';
import AdminHome from '../screens/AdminHome';
import AddProduct from '../screens/AddProduct';

const Stack = createNativeStackNavigator();
const AdminStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AdminHome"
        component={AdminHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddProduct"
        component={AddProduct}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AdminStack;

const styles = StyleSheet.create({});
