import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProductItem = (props) => (
  <TouchableOpacity onPress={props.onTabDetails}>
    <View style={styles.productView}>
      <Image style={styles.productImage} source={{ uri: props.image }} />
      <Text style={styles.productPrice}>${props.price.toFixed(2)}</Text>
      <Text style={styles.productTitle} numberOfLines={2}>{props.title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  productView: {
    paddingRight: 30,
    width: 200
  },
  productImage: {
    width: 150,
    height: 180,
    borderRadius: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#2A2A2A',
    fontFamily: 'Segoe UI',
    marginVertical: 5,
  },
  productTitle: {
    color: '#2A2A2A',
    fontFamily: 'Segoe UI',
    fontSize: 16,
  },
});

export default ProductItem;
