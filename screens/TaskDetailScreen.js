/*
 * Course: F2025 MAD201-01 Cross Platform MA
 * Assignment: 5 - Task Manager  hApp
 * Author: YOUR_FULL_NAME (YOUR_ID)
 * Description: Shows full details of a selected task and actions.
 */

import { useContext, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TaskContext } from '../context/TaskContext';
import { globalStyles } from '../styles/globalStyles';

/**
 * Displays selected task title, description, and status.
 * Allows marking complete/incomplete, editing, and deleting.
 */
export default function TaskDetailScreen({ route, navigation }) {
  const { taskId } = route.params;
  const { tasks, toggleComplete, removeTask } = useContext(TaskContext);

  const task = useMemo(
    () => tasks.find((t) => t.id === taskId),
    [tasks, taskId]
  );

  if (!task) {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Task not found</Text>
        <Text>It may have been deleted.</Text>
      </View>
    );
  }

  const handleToggle = () => {
    toggleComplete(task.id);
  };

  const handleDelete = () => {
    removeTask(task.id);
    navigation.goBack();
  };

  const handleEdit = () => {
    navigation.navigate('AddTask', { task });
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{task.title}</Text>
      <Text>{task.description || 'No description provided.'}</Text>

      <Text style={globalStyles.statusText}>
        Status: {task.completed ? 'Completed' : 'Pending'}
      </Text>

      <TouchableOpacity
        style={[
          globalStyles.button,
          task.completed && globalStyles.successButton,
        ]}
        onPress={handleToggle}
      >
        <Text style={globalStyles.buttonText}>
          {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={handleEdit}
      >
        <Text style={globalStyles.buttonText}>Edit Task</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[globalStyles.button, globalStyles.dangerButton]}
        onPress={handleDelete}
      >
        <Text style={globalStyles.buttonText}>Delete Task</Text>
      </TouchableOpacity>
    </View>
  );
}
