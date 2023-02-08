import React from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
// Safe Area
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Constants
import { COLORS } from '../constants/colors';
// Components
import { Card } from '../components/Card/Card';
import { CardTitle } from '../components/CardTitle/CardTitle';
import { TaskButton } from '../components/Task/TaskButton';
import { AddButton } from '../components/AddButton/AddButton';
import { TaskList } from '../components/Task/TaskList';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BottomKeyboardInput } from '../components/BottomKeyboardInput/BottomKeyboardInput';

export const TasksScreen = ({ navigation }) => {
    const tabBarHeight = useBottomTabBarHeight();

    function getWeek(day) {
        const currentWeek = [];
        const selectedDate = new Date(day);
        let currentDay = selectedDate.getDay();
        if (currentDay === 0) {
            currentDay = 7;
        }
        for (let i = 0; i < 7; i++) {
            const date = new Date(day);
            date.setDate(selectedDate.getDate() - currentDay + i + 1); // +1 so it starts on monday
            currentWeek.push({
                date: date.toISOString().substring(0, 10),
                weekday: date.toLocaleString('default', { weekday: 'long' }),
            });
        }
        return currentWeek;
    }

    const mondayTasks = [
        {
            id: '1',
            text: 'Fazer comida',
            note: 'Comprar carne, legumes, frutas, etc.',
            completed: false,
            date_completed: undefined,
            date_created: new Date(),
            date_for_completion: new Date(2023, 2, 15),
            date_deadline: new Date(2023, 2, 16),
            notify: true,
            notify_date: new Date(2023, 2, 14),
            subtasks: [
                {
                    id: '1',
                    text: 'Fazer comida',
                    completed: true,
                },
                {
                    id: '2',
                    text: 'Fazer comida',
                    completed: false,
                },
                {
                    id: '2',
                    text: 'Fazer comida',
                    completed: false,
                },
            ],
        },
        {
            id: '2',
            text: 'Ir na acadêmia fazer exercícios',
            note: undefined,
            completed: false,
            date_completed: undefined,
            date_created: new Date(),
            date_for_completion: new Date(2023, 2, 15),
            date_deadline: undefined,
            notify: false,
            notify_date: undefined,
            subtasks: [],
        },
    ];

    console.log(tabBarHeight);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ ...styles.contentContainer }}>
                <Card>
                    <View style={styles.titleContainer}>
                        <CardTitle title={'segunda'} day={26} month={12} />
                    </View>
                    <TaskList taskArray={mondayTasks} />
                    <View style={styles.addButtonContainer}>
                        <AddButton
                            iconType={'squared'}
                            color={COLORS.default.systemGreen}
                            text={'Nova tarefa em segunda'}
                        />
                    </View>
                </Card>
            </View>
            <BottomKeyboardInput marginBottom={tabBarHeight} placeholder={'Adicionar tarefa em segunda...'} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.systemBackground.primary,
    },
    titleContainer: {
        width: '100%',
        paddingHorizontal: 12,
        marginBottom: 12,
    },
    addButtonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 12,
    },
});
