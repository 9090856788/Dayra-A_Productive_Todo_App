import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import React, { FC, useRef, useEffect } from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';
import { goBack, navigate } from '../../utils/NavigationUtil';
const { width, height } = Dimensions.get('window');

const StartScreen: FC = () => {
  const scaleAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  });

  return (
    <View style={styles.container}>
      {/* Header content area will go here */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Main content area */}
      <View style={styles.mainContent}>
        {/* Title content area */}
        <View style={styles.mainTitle}>
          <Text style={styles.mainTitleContent}>Welcome to DAYRA</Text>
        </View>

        {/* Description content area */}
        <View style={styles.mainDesc}>
          <Text style={styles.mainDescContent}>
            Please login to your account or create new account to continue.
          </Text>
        </View>
        {/* welcome image will go here */}
        <View>
          <Animated.Image
            source={require('../../assets/images/welcome1.png')}
            style={[styles.welcomeImage, { transform: [{ scale: scaleAnim }] }]}
          />
        </View>
      </View>

      {/* Footer area content will go here */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigate('LoginScreen')}
        >
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => navigate('RegisterScreen')}
        >
          <Text>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    backgroundColor: '#fff',
  },
  header: {
    flex: 0.05,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  mainContent: {
    flex: 0.7,
    alignItems: 'center',
  },
  mainTitle: {
    paddingTop: 20,
    // padding: 20,
  },
  mainTitleContent: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  mainDesc: {
    padding: 20,
    textAlign: 'center',
  },
  mainDescContent: {
    textAlign: 'center',
    fontSize: 20,
  },
  welcomeImage: {
    width: width * 0.8,
    height: height * 0.5,
    resizeMode: 'contain',
  },
  footer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    width: '100%',
  },
  loginButton: {
    width: '90%',
    paddingVertical: 14,
    backgroundColor: '#8875FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountButton: {
    width: '90%',
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#8875FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
