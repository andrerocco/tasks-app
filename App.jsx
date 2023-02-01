import 'react-native-gesture-handler'; // Must be first import
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
// Safe Area
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Tabs
import Tabs from './src/navigation/Tabs';

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Tabs />
                </NavigationContainer>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}
