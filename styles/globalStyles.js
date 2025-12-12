/*
 * Course: F2025 MAD201-01 Cross Platform MA
 * Assignment: 5 - Task Manager App
 * Author: YOUR_FULL_NAME (YOUR_ID)
 * Description: Shared styling for Task Manager screens & components.
 */

import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#2196F3',
  primaryDark: '#1769AA',
  background: '#F5F5F5',
  text: '#333333',
  success: '#4CAF50',
  danger: '#E53935',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  dangerButton: {
    backgroundColor: COLORS.danger,
  },
  successButton: {
    backgroundColor: COLORS.success,
  },
  statusText: {
    marginTop: 8,
    fontSize: 14,
    color: COLORS.text,
  },
});
