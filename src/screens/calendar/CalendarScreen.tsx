import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { Calendar } from 'react-native-calendars';
import TaskList from '../../components/TaskItem';
import { useTask } from '../../context/TaskContext';

const CalendarScreen: FC = () => {
  const { tasks, deleteTask, toggleTask } = useTask();

  return (
    <View style={styles.container}>
      {/*Heading */}
      <View style={styles.header}>
        <Text style={styles.headerContent}>Calendar</Text>
      </View>

      {/* Calendar Content */}
      <View style={styles.calendarContainer}>
        <Calendar />
      </View>

      {/* task status content */}
      <View style={styles.taskStatusContainer}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
          repellat odit mollitia consequuntur, ratione consequatur dolores
          eveniet hic ad quisquam.
        </Text>
      </View>
      {/* Tasklist Content */}
      <View style={styles.taskListContainer}>
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </View>
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    borderWidth: 1,
    borderColor: 'red',
  },
  header: {
    flex: 0.03,
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: 'blue',
  },
  headerContent: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  calendarContainer: {
    flex: 0.45,
    borderWidth: 1,
    borderColor: 'green',
  },
  taskStatusContainer: {
    flex: 0.1,
    borderWidth: 1,
    borderColor: 'blue',
  },
  taskListContainer: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: 'orange',
  },
});
