import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const DATA = ['Task 1', 'Task 2', 'Task 3'];

const TaskList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16, // ✅ instead of margin
  },

  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 20,
    marginBottom: 12, // ✅ vertical spacing only
  },
});
