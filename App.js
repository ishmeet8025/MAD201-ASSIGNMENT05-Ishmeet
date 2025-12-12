import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TaskProvider } from './context/TaskContext';
import AddTaskScreen from './screens/AddTaskScreen';
import AllTasksScreen from './screens/AllTasksScreen';
import CompletedTasksScreen from './screens/CompletedTasksScreen';
import TaskDetailScreen from './screens/TaskDetailScreen';
import { COLORS } from './styles/globalStyles';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

/**
 * Tab navigator for All Tasks and Completed Tasks.
 */
function TaskTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: '#999',
        tabBarIcon: ({ color, size }) => {
          let iconName = 'list';

          if (route.name === 'All Tasks') {
            iconName = 'list';
          } else if (route.name === 'Completed') {
            iconName = 'checkmark-done';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="All Tasks" component={AllTasksScreen} />
      <Tab.Screen name="Completed" component={CompletedTasksScreen} />
    </Tab.Navigator>
  );
}

/**
 * Root component that wraps navigation with TaskProvider.
 */
export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tasks"
            component={TaskTabs}
            options={{ title: 'Task Manager' }}
          />
          <Stack.Screen
            name="AddTask"
            component={AddTaskScreen}
            options={{ title: 'Add Task' }}
          />
          <Stack.Screen
            name="TaskDetails"
            component={TaskDetailScreen}
            options={{ title: 'Task Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}
