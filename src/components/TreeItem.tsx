import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import ProductsTree from './ProductsTree';

interface TreeItemProps {
  id: number;
  name: string;
  selected?: boolean;
  onPress?: () => void;
  children?: Array<{ id: number; name: string }>;
  level: number;
}

const TreeItem: React.FC<TreeItemProps> = ({
  name,
  onPress,
  selected,
  children,
  level,
}) => {
  return (
    <View>
      <Pressable style={styles.container} onPress={onPress}>
        <Text>{selected ? '✓' : '-'}</Text>
        <Text>{name}</Text>
      </Pressable>
      {children && <ProductsTree level={level} data={children} />}
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
});
