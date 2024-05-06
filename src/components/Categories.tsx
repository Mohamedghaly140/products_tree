import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ProductsTree from './ProductsTree';
import data from '../data/simple-data.json';
import CardsView from './CardsView';

const Categories = () => {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  const selectItemHandler = (item: Item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(prevItems => prevItems.filter(i => i !== item));
    } else {
      setSelectedItems(prevItems => [...prevItems, item]);
    }
  };

  return (
    <View style={styles.container}>
      <ProductsTree
        data={data.categories}
        selectedItems={selectedItems}
        onSelect={selectItemHandler}
      />
      <CardsView items={selectedItems} />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {},
});
