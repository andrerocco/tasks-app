import 'react-native-gesture-handler'; // Must be first import
import React from 'react';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Safe Area
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Screens
import { TaskCreationScreen } from './src/screens/TaskCreationScreen.jsx';
import { HomeScreen } from './src/screens/HomeScreen.jsx';

const Stack = createStackNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="TaskCreationScreen" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="TaskCreation" component={TaskCreationScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
