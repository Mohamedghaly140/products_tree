import React from 'react';
import { StyleSheet, View } from 'react-native';
import ItemCard from './ItemCard';

interface CardsViewProps {
  items: Item[];
}

// function groupBy<T extends Record<K, any>, K extends keyof T>(
//   data: T[],
//   key: K,
// ): Record<T[K], T[]> {
//   return data.reduce((acc, item) => {
//     const groupKey = item[key];
//     acc[groupKey] = acc[groupKey] || [];
//     acc[groupKey].push(item);
//     return acc;
//   }, {} as Record<K, T[]>);
// }

const CardsView: React.FC<CardsViewProps> = ({ items }) => {
  // const groupedItems = groupBy<Item, 'parentName'>(items, 'parentName');
  // console.log(Object.entries(groupedItems));

  return (
    <View style={styles.container}>
      {items.map(item => (
        <ItemCard key={`${item.id}-${item.name}`}>
          {item.parentName ?? ''} {item.name}
        </ItemCard>
      ))}
    </View>
  );
};

export default CardsView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 4,
  },
});
