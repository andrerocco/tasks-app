import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//Colors
import { COLORS } from './src/constants/colors.js';
// Components
import { TaskButton } from './src/components/Task/TaskButton.jsx';

export default function App() {
    return (
        <View style={styles.container}>
            <TaskButton>Texto testando com um texto muito maior que é para quebrar quando chegar no canto</TaskButton>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.systemBackground.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

