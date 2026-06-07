import React, { FC, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { navigate } from '../../utils/NavigationUtil';
import { onboardingData } from './data/onboardingData';
const { width, height } = Dimensions.get('window');

const OnboardingScreen: FC = () => {
  // Track current screen index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get current screen data
  const currentItem = onboardingData[currentIndex];

  // NEXT button logic
  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      navigate('StartScreen');
    }
  };

  // BACK button logic
  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // SKIP logic
  const handleSkip = () => {
    navigate('StartScreen');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.heading}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.headingContent}>SKIP</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Image */}
        <View>
          <Image source={currentItem.image} style={styles.image} />
        </View>

        {/* Title */}
        <View>
          <Text style={styles.title}>{currentItem.title}</Text>
        </View>

        {/* Description */}
        <Text style={styles.description}>{currentItem.description}</Text>
      </View>

      {/* Pagination Dots */}
      <View style={styles.dotsContainer}>
        {onboardingData.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        {/* Back Button (only show if not first screen) */}
        {currentIndex > 0 && (
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backText}>BACK</Text>
          </TouchableOpacity>
        )}

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>
            {currentIndex === onboardingData.length - 1
              ? 'GET STARTED'
              : 'NEXT'}
          </Text>
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
    backgroundColor: '#fff',
  },

  heading: {
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  headingContent: {
    color: '#000',
    fontSize: 16,
  },

  mainContent: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 10,
  },

  image: {
    width: width * 0.9,
    height: height * 0.4,
    resizeMode: 'contain',
  },

  title: {
    color: '#000',
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
  },

  description: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },

  dotsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#555',
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: '#8875FF',
    width: 16,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },

  backButton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#8875FF',
  },

  backText: {
    color: '#8875FF',
    fontWeight: '600',
  },

  nextButton: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 14,
    backgroundColor: '#8875FF',
    borderRadius: 10,
    alignItems: 'center',
  },

  nextText: {
    color: '#fff',
    fontWeight: '600',
  },
});
