import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import TreeItem from './TreeItem';

interface ProductsTreeProps {
  level?: number;
  data: Array<Item>;
  onSelect: (item: Item) => void;
  selectedItems: Array<Item>;
}

const ProductsTree: React.FC<ProductsTreeProps> = ({
  data,
  onSelect,
  level = 1,
  selectedItems,
}) => {
  return (
    <View style={[styles.container, { paddingStart: level * 16 }]}>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <TreeItem
            item={item}
            level={level}
            onSelect={onSelect}
            selectedItems={selectedItems}
            selected={selectedItems.includes(item)}
          />
        )}
      />
    </View>
  );
};

export default ProductsTree;

const styles = StyleSheet.create({
  container: {},
});
