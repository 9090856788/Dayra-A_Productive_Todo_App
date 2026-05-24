/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../components/Header';
import FloatingActionButton from '../components/FloatingActionButton';
import TaskList from '../components/TaskItem';
import Modal from 'react-native-modal';

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

const HomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState<Task[]>([]);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleAddTask = () => {
    if (!task.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title: task,
      completed: false,
    };

    setTaskList(prevTasks => [...prevTasks, newTask]);
    setTask('');
    setIsModalVisible(false);
  };
  return (
    <View style={styles.container}>
      {/* Header Layer  */}
      <View style={styles.header}>
        <Header title="DAYRA" headerStyle={{ color: 'orange' }} />
      </View>

      {/* Tasklist Content Layer */}
      <View style={styles.taskListContainer}>
        <TaskList tasks={taskList} />
      </View>

      {/* FAB Layer  */}
      <View style={styles.fabContainer}>
        <FloatingActionButton
          onPress={handleOpenModal}
          // backgroundColor="orange"
          icon="add"
          right={18}
          bottom={10}
        />
      </View>
      {/* Modal for adding task */}
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
              <Text style={styles.addBtnText}>Add</Text>
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
    borderWidth: 1,
    borderColor: '#f66262',
    gap: 10,
    padding: 16,
  },
  header: {
    flex: 0.1,
    borderWidth: 1,
    borderColor: '#4ce123',
  },
  taskListContainer: {
    flex: 0.8,
    borderWidth: 1,
    borderColor: '#4ce123',
  },
  fabContainer: {
    flex: 0.1,
    borderWidth: 1,
    borderColor: '#633fdb',
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

  addBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
