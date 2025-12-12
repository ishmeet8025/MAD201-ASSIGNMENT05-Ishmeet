/*
 * Course: F2025 MAD201-01 Cross Platform MA
 * Assignment: 5 - Task Manager App
 * Author: YOUR_FULL_NAME (YOUR_ID)
 * Description: Provides global state management for tasks using React Context API.
 */

import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

/**
 * Represents a single task item.
 * @typedef {Object} Task
 * @property {string} id - Unique task identifier.
 * @property {string} title - Task title.
 * @property {string} description - Task description.
 * @property {boolean} completed - Completion status.
 */

/**
 * TaskProvider wraps the app and exposes task-related state and actions.
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  /**
   * Adds a new task to the list.
   * @param {string} title
   * @param {string} description
   */
  const addTask = (title, description) => {
    const newTask = {
      id: Date.now().toString(), // simple unique id
      title,
      description,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  /**
   * Removes a task by its id.
   * @param {string} id
   */
  const removeTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  /**
   * Toggles completed status for a task.
   * @param {string} id
   */
  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  /**
   * Updates title and description of an existing task.
   * @param {string} id
   * @param {string} title
   * @param {string} description
   */
  const updateTask = (id, title, description) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, title, description } : t
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, toggleComplete, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
