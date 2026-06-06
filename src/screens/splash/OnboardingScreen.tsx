import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import React, { FC } from 'react';

const OnboardingScreen: FC = () => {
  return (
    <View style={styles.container}>
      {/* Heading area */}
      <View style={styles.heading}>
        <TouchableOpacity>
          <Text style={styles.headingContent}>SKIP</Text>
        </TouchableOpacity>
      </View>

      {/* Main content area */}
      <View style={styles.mainContent}>
        <Text>Main Content</Text>
      </View>

      {/* Footer area content will go here */}
      <View style={styles.footer}>
        <Button title=" BACK" onPress={() => console.log('Pressed')} />
        <Button title="NEXT" onPress={() => console.log('Pressed')} />
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    borderWidth: 1,
    borderColor: 'red',
  },
  heading: {
    flex: 0.05,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'blue',
  },
  headingContent: {
    fontSize: 18,
  },
  mainContent: {
    flex: 0.8,
    borderWidth: 1,
    borderColor: 'green',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 0.1,
    borderWidth: 1,
    borderColor: 'green',
  },
});
