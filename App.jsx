import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
// Colors
import { COLORS } from './src/constants/colors.js';
// Screens
import { TaskCreationScreen } from './src/screens/TaskCreationScreen.jsx';

export default function App() {
    return <TaskCreationScreen />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.systemBackground.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
