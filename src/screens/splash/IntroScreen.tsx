import { StyleSheet, View, Animated } from 'react-native';
import React, { FC, useRef, useEffect } from 'react';
import { navigate } from '../../utils/NavigationUtil';

const IntroScreen: FC = () => {
  const scaleAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      // Navigate to onboard screen after animation
      navigate('OnboardScreen');
    }, 1500);
  }, [scaleAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/images/logo1.png')}
        style={[
          styles.logo,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 420,
    height: 320,
    resizeMode: 'contain',
  },
});
