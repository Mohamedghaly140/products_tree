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

function groupItemsByParentName(items: Item[]): Record<string, Item[]> {
  return items.reduce((groups, item) => {
    const groupKey = item.parentName || 'NoParent';
    groups[groupKey] = groups[groupKey] || [];
    groups[groupKey].push(item);
    return groups;
  }, {} as Record<string, Item[]>);
}

const CardsView: React.FC<CardsViewProps> = ({ items }) => {
  const groupedItems = groupItemsByParentName(items);

  const renderItems = Object.entries(groupedItems).map(
    ([parentName, variants]) => {
      if (parentName === 'NoParent') {
        return variants.map(variant => (
          <ItemCard key={`${variant.id}-${variant.name}`}>
            {variant.name}
          </ItemCard>
        ));
      }
      return (
        <ItemCard key={parentName}>
          {parentName} {variants.map(variant => variant.name).join(', ')}
        </ItemCard>
      );
    },
  );

  return <View style={styles.container}>{renderItems}</View>;
};

export default CardsView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 4,
  },
});
