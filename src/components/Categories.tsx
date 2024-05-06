import React from 'react';
import { StyleSheet, View } from 'react-native';
import data from '../data/simple-data.json';
import ProductsTree from './ProductsTree';

const Categories = () => {
  return (
    <View style={styles.container}>
      <ProductsTree data={data.categories} />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {},
});
