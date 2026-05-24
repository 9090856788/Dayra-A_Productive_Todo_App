import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import Header from '../components/Header';
import FloatingActionButton from '../components/FloatingActionButton';

const HomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    console.log('Task:', task);
    setTask('');
    setIsModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Header title="To Do App" />

      {/* FAB Component */}
      <FloatingActionButton
        onPress={handleAddTask}
        borderRadius={8}
        backgroundColor="orange"
        icon="add"
        left={170}
        bottom={60}
      />

      {/* SMOOTH MODAL */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.5}
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Add Task</Text>

          <TextInput
            placeholder="Enter your task..."
            value={task}
            onChangeText={setTask}
            style={styles.input}
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity
              onPress={() => setIsModalVisible(false)}
              style={styles.cancelBtn}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleAddTask} style={styles.addBtn}>
              <Text>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  cancelBtn: {
    marginRight: 10,
    padding: 10,
  },

  addBtn: {
    backgroundColor: 'orange',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
  },
});
