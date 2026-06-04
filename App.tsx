import { StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation/Navigation';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
