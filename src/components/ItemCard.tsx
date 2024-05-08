import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScaleSize } from '../utils';

interface ItemCardProps {
  children: React.ReactNode;
}

const ItemCard: React.FC<ItemCardProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text>{children}</Text>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: moderateScaleSize(1),
    borderColor: 'black',
    margin: moderateScaleSize(4),
    padding: moderateScaleSize(8),
    borderRadius: moderateScaleSize(8),
  },
});
