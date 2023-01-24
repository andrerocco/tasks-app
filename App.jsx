import 'react-native-gesture-handler'; // Must be first import
import React from 'react';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Safe Area
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Screens
import { TaskOptionsScreen } from './src/screens/TaskOptionsScreen.jsx';
import { HomeScreen } from './src/screens/HomeScreen.jsx';
import { TasksScreen } from './src/screens/TasksScreen.jsx';
import { COLORS } from './src/constants/colors.js';

const Stack = createStackNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Tasks"
                    screenOptions={{
                        headerShown: false,
                        cardStyle: { backgroundColor: COLORS.systemBackground.primary },
                    }}
                >
                    <Stack.Screen name="Tasks" component={TasksScreen} />
                    <Stack.Screen name="TaskOptions" component={TaskOptionsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
