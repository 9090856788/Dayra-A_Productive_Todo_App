import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { navigate } from '../../utils/NavigationUtil';

const OnboardingScreen: FC = () => {
  return (
    <View style={styles.container}>
      {/* Heading area */}
      <View style={styles.heading}>
        <TouchableOpacity onPress={() => navigate('StartScreen')}>
          <Text style={styles.headingContent}>SKIP</Text>
        </TouchableOpacity>
      </View>

      {/* Main content area */}
      <View style={styles.mainContent}>
        <Text>Main Content</Text>
      </View>

      {/* Footer area content will go here */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigate('StartScreen')}
        >
          <Text>NEXT</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'blue',
  },
  headingContent: {
    fontSize: 16,
  },
  mainContent: {
    flex: 0.8,
    borderWidth: 1,
    borderColor: 'green',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.1,
    width: '100%',
    borderWidth: 1,
    borderColor: 'green',
  },
  nextButton: {
    width: '90%',
    paddingVertical: 14,
    backgroundColor: '#8875FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
