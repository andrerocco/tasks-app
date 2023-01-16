import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button onPress={() => navigation.navigate('TaskCreation')} title="Go to TaskCreation" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
