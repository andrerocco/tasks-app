import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Constants
import { COLORS } from '../constants/colors';
// TabBar
import { BlurTabBar } from './BlurTabBar';
// Tabs
import { TasksStack } from './stacks/TasksStack';
import { HomeScreen } from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => <BlurTabBar {...props} />}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: 'transparent',
                    borderTopWidth: 0,
                },
                tabBarActiveTintColor: COLORS.default.systemGreen,
                tabBarInactiveTintColor: COLORS.label.secondary,
            }}
        >
            <Tab.Screen name="TasksTab" component={TasksStack} />
            <Tab.Screen name="HomeTab" component={HomeScreen} options={{ unmountOnBlur: true }} />
        </Tab.Navigator>
    );
};

export default Tabs;
