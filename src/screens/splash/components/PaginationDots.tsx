import React from 'react';
import { View, StyleSheet } from 'react-native';

const PaginationDots = ({ data, currentIndex }: any) => {
  return (
    <View style={styles.container}>
      {data.map((_: any, index: number) => (
        <View
          key={index}
          style={[styles.dot, currentIndex === index && styles.activeDot]}
        />
      ))}
    </View>
  );
};

export default PaginationDots;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#555',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#7B61FF',
    width: 16,
  },
});
