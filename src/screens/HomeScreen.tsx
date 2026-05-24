import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
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
        <Image
          source={require('../assets/images/logo1.png')}
          style={styles.logo}
        />
      </View>

      {/* Tasklist Content */}
      <View style={styles.taskListContainer}>
        {taskList.length === 0 ? (
          <View style={styles.noTasksContainer}>
            <Image
              source={require('../assets/images/noTask.png')}
              style={styles.noTasksImage}
            />
          </View>
        ) : (
          <TaskList tasks={taskList} />
        )}
      </View>

      {/* FAB Layer  */}
      <View style={styles.fabContainer}>
        <FloatingActionButton
          onPress={handleOpenModal}
          backgroundColor="#8687E7"
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 100,
    alignSelf: 'center',
    // resizeMode: 'contain',
  },
  taskListContainer: {
    flex: 0.8,
    borderWidth: 1,
    borderColor: '#4ce123',
  },
  noTasksContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  noTasksImage: {
    width: 300,
    height: 400,
    marginBottom: 20,
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
    backgroundColor: '#8687E7',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
  },

  addBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
