import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductDetail = ({route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <Text>ProductDetail</Text>
    </View>
  )
}

export default ProductDetail;

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:"#fff"}
})