import React, { FC } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const OnboardingItem: FC = ({ item }: any) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
});
