import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import { useTask } from '../context/TaskContext';

const AddTaskModal: React.FC = () => {
  const { showModal, setShowModal, addTask } = useTask();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (title.trim()) {
      addTask({
        title: title.trim(),
        description: description.trim() || undefined,
        completed: false,
      });
      setTitle('');
      setDescription('');
    }
  };

  const handleCancel = () => {
    setShowModal(false);
    setTitle('');
    setDescription('');
  };

  return (
    <Modal
      isVisible={showModal}
      onBackdropPress={handleCancel}
      onBackButtonPress={handleCancel}
      style={styles.modal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      swipeDirection={['down']}
      onSwipeComplete={handleCancel}
    >
      <ScrollView
        style={styles.modalContainer}
        scrollEnabled={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <Text style={styles.title}>Add New Task</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Task Title"
          placeholderTextColor="#999"
          value={title}
          onChangeText={setTitle}
          maxLength={100}
        />

        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Description (Optional)"
          placeholderTextColor="#999"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
          maxLength={500}
          textAlignVertical="top"
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={handleCancel}
            activeOpacity={0.7}
          >
            <Text style={styles.cancelBtnText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.addBtn, !title.trim() && styles.addBtnDisabled]}
            onPress={handleAddTask}
            disabled={!title.trim()}
            activeOpacity={0.7}
          >
            <Text style={styles.addBtnText}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default AddTaskModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
  },

  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },

  descriptionInput: {
    minHeight: 100,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    marginTop: 10,
  },

  cancelBtn: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },

  cancelBtnText: {
    color: '#666',
    fontWeight: '600',
    fontSize: 14,
  },

  addBtn: {
    backgroundColor: '#8687E7',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 8,
  },

  addBtnDisabled: {
    backgroundColor: '#ccc',
    opacity: 0.6,
  },

  addBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
