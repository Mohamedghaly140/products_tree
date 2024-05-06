import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import ProductsTree from './ProductsTree';

interface TreeItemProps {
  selected?: boolean;
  item: Item;
  level: number;
  onSelect: (item: Item) => void;
  selectedItems: Array<Item>;
}

const TreeItem: React.FC<TreeItemProps> = ({
  onSelect,
  selected,
  level,
  item,
  selectedItems,
}) => {
  const { name, children } = item;
  return (
    <View>
      <Pressable style={styles.container} onPress={() => onSelect(item)}>
        <View style={styles.checkbox}>
          <Text>{selected ? '✓' : ''}</Text>
        </View>
        <Text>{name}</Text>
      </Pressable>
      {children && (
        <ProductsTree
          level={level}
          data={children}
          onSelect={onSelect}
          selectedItems={selectedItems}
        />
      )}
    </View>
  );
};

export default TreeItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 8,
    paddingVertical: 4,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
