import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    borderWidth: 1,
    borderColor: 'black',
    margin: 4,
    padding: 8,
    borderRadius: 8,
  },
});
