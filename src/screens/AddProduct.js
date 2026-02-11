import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MytextInput from "../components/MytextInput"
import AddProductHeader from '../components/AddProductHeader'

const AddProduct = () => {
  return (
    <View style={styles.container}>
      <AddProductHeader/>
    </View>
  )
}

export default AddProduct;

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:"#fff"},
})