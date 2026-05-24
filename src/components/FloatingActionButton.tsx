import React, { FC } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

interface FloatingActionButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  icon?: string;
  backgroundColor?: string;
  size?: number;
  borderRadius?: number;
  bottom?: number;
  left?: number;
  right?: number;
  style?: ViewStyle;
}

const FloatingActionButton: FC<FloatingActionButtonProps> = ({
  onPress,
  icon,
  backgroundColor = '#6200ee',
  size = 60,
  borderRadius,
  bottom,
  left,
  right,
}) => {
  const dynamicStyle: ViewStyle = {
    bottom,
    left,
    right,
    width: size,
    height: size,
    borderRadius: borderRadius ?? size / 2,
    backgroundColor,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.fab, dynamicStyle]}
    >
      <Ionicons name={icon as any} size={size * 0.4} color="#fff" />
    </TouchableOpacity>
  );
};

export default FloatingActionButton;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute', // ✅ keep only this
    justifyContent: 'center',
    alignItems: 'center',

    elevation: 6,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
