import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// Constants
import { COLORS } from '../../constants/colors';

const Stack = createStackNavigator();

export const SettingsStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Tasks"
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: COLORS.systemBackground.primary },
            }}
        ></Stack.Navigator>
    );
};
