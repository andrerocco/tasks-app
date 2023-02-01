import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// Constants
import { COLORS } from '../../constants/colors';
// Screens
import { TasksScreen } from '../../screens/TasksScreen';
import { TaskOptionsScreen } from '../../screens/TaskOptionsScreen';

const Stack = createStackNavigator();

export const TasksStack = () => {
    useEffect(() => {
        console.log('Component TasksStack mounted');
    }, []);

    return (
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
    );
};
