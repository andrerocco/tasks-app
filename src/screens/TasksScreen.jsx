import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// Safe Area
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Constants
import { COLORS } from '../constants/colors';
// Components
import { Card } from '../components/Card/Card';
import { TaskButton } from '../components/Task/TaskButton';
import { AddButton } from '../components/AddButton/AddButton';

export const TasksScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Card>
                <TaskButton>Teste</TaskButton>
                <View style={styles.addButtonContainer}>
                    <AddButton
                        iconType={'squared'}
                        color={COLORS.default.systemGreen}
                        text={'Nova tarefa em segunda'}
                    />
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.systemBackground.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 12,
    },
});
