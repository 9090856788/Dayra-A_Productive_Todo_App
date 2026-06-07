import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { FC } from 'react';
import { Task } from '../context/TaskContext';
import Checkbox from './Checkbox';

type TaskListProps = {
  tasks: Task[];
  onToggle?: (id: string) => void;
  onDelete?: (id: string) => void;
};

const TaskList: FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.card}>
      <Checkbox checked={item.completed} onToggle={() => onToggle?.(item.id)} />
      <View style={styles.taskContent}>
        <Text style={[styles.text, item.completed && styles.completedText]}>
          {item.title}
        </Text>
        {item.description && (
          <Text style={styles.description}>{item.description}</Text>
        )}
      </View>

      <TouchableOpacity activeOpacity={0.7} onPress={() => onDelete?.(item.id)}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 12,
    backgroundColor: '#fff',
  },

  taskContent: {
    flex: 1,
    marginLeft: 12,
  },

  text: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: '#aaa',
    fontWeight: '400',
  },

  description: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
  },

  deleteText: {
    color: '#ff4d4d',
    fontSize: 13,
    fontWeight: '600',
  },
});
