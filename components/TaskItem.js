/*
 * Course: F2025 MAD201-01 Cross Platform MA
 * Assignment: 5 - Task Manager App
 * Author: YOUR_FULL_NAME (YOUR_ID)
 * Description: Reusable list item component for displaying a single task.
 */

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../styles/globalStyles';

/**
 * Renders a single task row for FlatList.
 * @param {Object} props
 * @param {Object} props.task - Task to display.
 * @param {Function} props.onPress - Called when user taps the item.
 */
export default function TaskItem({ task, onPress }) {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.status}>
          {task.completed ? 'Completed' : 'Pending'}
        </Text>
      </View>
      <View
        style={[
          styles.statusDot,
          { backgroundColor: task.completed ? COLORS.success : COLORS.primary },
        ]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
  },
  status: {
    marginTop: 4,
    fontSize: 13,
    color: '#777',
  },
  statusDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginLeft: 10,
  },
});
