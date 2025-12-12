/*
 * Course: F2025 MAD201-01 Cross Platform MA
 * Assignment: 5 - Task Manager App
 * Author: YOUR_FULL_NAME (YOUR_ID)
 * Description: Shows only tasks marked as completed.
 */

import { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import TaskItem from '../components/TaskItem';
import { TaskContext } from '../context/TaskContext';
import { globalStyles } from '../styles/globalStyles';

/**
 * Displays only completed tasks.
 */
export default function CompletedTasksScreen({ navigation }) {
  const { tasks } = useContext(TaskContext);

  const completedTasks = tasks.filter((t) => t.completed);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Completed Tasks</Text>

      {completedTasks.length === 0 ? (
        <Text>No completed tasks yet.</Text>
      ) : (
        <FlatList
          data={completedTasks}
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
    </View>
  );
}
