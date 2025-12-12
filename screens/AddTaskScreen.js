/*
 * Course: F2025 MAD201-01 Cross Platform MA
 * Assignment: 5 - Task Manager App
 * Author: YOUR_FULL_NAME (YOUR_ID)
 * Description: Form screen for creating or editing a task.
 */

import { useContext, useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TaskContext } from '../context/TaskContext';
import { globalStyles } from '../styles/globalStyles';

/**
 * Displays form to add a new task or edit an existing one.
 * Uses route params to optionally receive task data (edit mode).
 */
export default function AddTaskScreen({ navigation, route }) {
  const { addTask, updateTask } = useContext(TaskContext);
  const taskToEdit = route?.params?.task || null;

  const [title, setTitle] = useState(taskToEdit ? taskToEdit.title : '');
  const [description, setDescription] = useState(
    taskToEdit ? taskToEdit.description : ''
  );

  useEffect(() => {
    navigation.setOptions({
      title: taskToEdit ? 'Edit Task' : 'Add Task',
    });
  }, [navigation, taskToEdit]);

  const handleSave = () => {
    if (!title.trim()) {
      return; // simple validation
    }

    if (taskToEdit) {
      updateTask(taskToEdit.id, title.trim(), description.trim());
    } else {
      addTask(title.trim(), description.trim());
    }

    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>
        {taskToEdit ? 'Edit Task' : 'Add New Task'}
      </Text>

      <TextInput
        style={globalStyles.input} 
        placeholder="Task title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[globalStyles.input, { height: 100 }]}
        placeholder="Task description"
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity style={globalStyles.button} onPress={handleSave}>
        <Text style={globalStyles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
