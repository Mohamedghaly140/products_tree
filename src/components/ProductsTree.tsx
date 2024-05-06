import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import TreeItem from './TreeItem';

interface ProductsTreeProps {
  level?: number;
  data: Array<{ id: number; name: string }>;
}

const ProductsTree: React.FC<ProductsTreeProps> = ({ data, level = 1 }) => {
  return (
    <View style={[styles.container, { paddingStart: level * 16 }]}>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => <TreeItem {...item} level={level} />}
      />
    </View>
  );
};

export default ProductsTree;

const styles = StyleSheet.create({
  container: {},
});
