/*
 * Course: F2025 MAD201-01 Cross Platform MA
 * Assignment: 5 - Task Manager App
 * Author: YOUR_FULL_NAME (YOUR_ID)
 * Description: Shows all tasks in a FlatList with a floating action button to add tasks.
 */

import { useContext, useEffect } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import TaskItem from '../components/TaskItem';
import { TaskContext } from '../context/TaskContext';
import { COLORS, globalStyles } from '../styles/globalStyles';

/**
 * Displays all tasks (completed + pending).
 * Demonstrates useEffect to update the screen title dynamically.
 */
export default function AllTasksScreen({ navigation }) {
  const { tasks } = useContext(TaskContext);

  useEffect(() => {
    // Update header title to show task count (useEffect requirement)
    navigation.setOptions({
      title: `All Tasks (${tasks.length})`,
    });
  }, [navigation, tasks]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>All Tasks</Text>

      {tasks.length === 0 ? (
        <Text>No tasks yet. Tap + to add one.</Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onPress={() =>
                navigation.navigate('TaskDetails', { taskId: item.id })
              }
            />
          )}
        />
      )}

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddTask')}
      >
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  addText: {
    color: '#FFF',
    fontSize: 28,
    lineHeight: 30,
  },
});
