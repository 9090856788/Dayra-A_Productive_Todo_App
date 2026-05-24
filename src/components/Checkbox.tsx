import React, { FC } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
}

const Checkbox: FC<CheckboxProps> = ({ checked, onToggle }) => {
  return (
    <TouchableOpacity onPress={onToggle} activeOpacity={0.7}>
      <View style={[styles.box, checked && styles.checked]} />
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  box: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#555',
  },
  checked: {
    backgroundColor: '#555',
  },
});
