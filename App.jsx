import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//Colors
import { COLORS } from './src/constants/colors.js';
// Components
import { LabelledCheckButton } from './src/components/LabelledCheckButton/index.jsx';
import { CircularProgressChart } from './src/components/CircularProgressChart/index.jsx';

export default function App() {
    return (
        <View style={styles.container}>
            <LabelledCheckButton>
                Texto testando com um texto muito maior que é para quebrar quando chegar no canto
            </LabelledCheckButton>
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

