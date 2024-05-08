import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Categories from './src/components/Categories';
import { moderateScaleSize } from './src/utils';

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.text}>Browse Products</Text>
      <Categories />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    fontSize: moderateScaleSize(20),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
