import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../components/Header';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Dayra" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
