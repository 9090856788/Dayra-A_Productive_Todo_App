import { StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
