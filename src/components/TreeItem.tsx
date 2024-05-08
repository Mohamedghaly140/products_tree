import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import ProductsTree from './ProductsTree';
import { moderateScaleSize, scaleSize, verticalScaleSize } from '../utils';

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
    columnGap: moderateScaleSize(8),
    paddingVertical: moderateScaleSize(4),
  },
  checkbox: {
    width: scaleSize(16),
    height: verticalScaleSize(16),
    borderWidth: moderateScaleSize(1),
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
