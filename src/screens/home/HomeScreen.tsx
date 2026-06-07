import { View, StyleSheet, Image, Text } from 'react-native';
import React, { FC } from 'react';
import { useTask } from '../../context/TaskContext';
import TaskList from '../../components/TaskItem';
import AddTaskModal from '../../components/AddTaskModal';

const HomeScreen: FC = () => {
  const { tasks, deleteTask, toggleTask } = useTask();
  console.log('HomeScreen Rendered with tasks:', tasks);

  return (
    <View style={styles.container}>
      {/* Header Layer  */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logo1.png')}
          style={styles.logo}
        />
      </View>

      {/* Task Count Info */}
      {tasks.length > 0 && (
        <View style={styles.infoBar}>
          <Text style={styles.infoText}>
            {tasks.filter(t => !t.completed).length} of {tasks.length} tasks
          </Text>
        </View>
      )}

      {/* Tasklist Content */}

      {/* Tasklist Content */}
      <View style={styles.taskListContainer}>
        {tasks.length === 0 ? (
          <View style={styles.noTasksContainer}>
            <Image
              source={require('../../assets/images/noTask.png')}
              style={styles.noTasksImage}
            />
            <Text style={styles.noTasksText}>No tasks yet!</Text>
            <Text style={styles.noTasksSubtext}>
              Tap the + button to add your first task
            </Text>
          </View>
        ) : (
          <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        )}
      </View>

      {/* Add Task Modal */}
      <AddTaskModal />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 100,
    alignSelf: 'center',
  },
  infoBar: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  taskListContainer: {
    flex: 0.8,
    borderRadius: 12,
    overflow: 'hidden',
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
  noTasksText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  noTasksSubtext: {
    fontSize: 14,
    color: '#999',
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
