import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface HeaderProps {
  title?: string;
  headerStyle?: any;
  containerStyle?: any;
}

const Header: React.FC<HeaderProps> = ({
  title,
  headerStyle,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.headerText, headerStyle]}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
