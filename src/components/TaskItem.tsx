import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { FC } from 'react';

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

type TaskListProps = {
  tasks: Task[];
  onToggle?: (id: string) => void;
  onDelete?: (id: string) => void;
};

const TaskList: FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.card}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => onToggle?.(item.id)}>
        <Text style={[styles.text, item.completed && styles.completedText]}>
          {item.title}
        </Text>
      </TouchableOpacity>

      <View style={styles.actions}>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.iconSpacing}
          onPress={() => onDelete?.(item.id)}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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

  text: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },

  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconSpacing: {
    marginLeft: 15,
  },

  editText: {
    color: '#555',
    fontSize: 14,
    fontWeight: '500',
  },

  deleteText: {
    color: '#ff4d4d',
    fontSize: 14,
    fontWeight: '500',
  },
});
