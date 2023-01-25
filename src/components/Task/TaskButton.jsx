import React, { useMemo, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import P from 'prop-types';
// Styles
import { LABEL } from '../../styles/styles.js';
// Constants
import { COLORS } from '../../constants/colors.js';
// Components
import { CheckCircle } from './CheckCircle/CheckCircle';
import { TaskSublabel } from './TaskSublabel/TaskSublabel';

export const TaskButton = ({ task, showBackground = false }) => {
    const [isChecked, setIsChecked] = useState(task.completed);

    function handleCheckPress() {
        setIsChecked((isChecked) => !isChecked);
    }

    // Converts a date object to a string in the format "Weekday, 25/04"
    function formatDate(date) {
        if (!(date instanceof Date)) {
            console.warn('Invalid argument. Argument must be of type Date.');
            return;
        }
        let day = date.getDate().toString().padStart(2, '0');
        let month = (date.getMonth() + 1).toString().padStart(2, '0');
        let weekDay = date.toLocaleString('default', { weekday: 'long' });
        weekDay = weekDay.slice(0, weekDay.indexOf('-')); // In pt-Br, removes the " -feira" part
        weekDay = weekDay[0].toUpperCase() + weekDay.slice(1); // Capitalizes the first letter
        return weekDay + ', ' + day + '/' + month;
    }

    function getProgress(subtasks) {
        if (subtasks.length === 0) {
            return undefined;
        } else {
            const completedSubtasks = subtasks.filter((subtask) => subtask.completed);
            return completedSubtasks.length / subtasks.length;
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ ...styles.background, opacity: showBackground ? '1' : '0' }} />
            <View style={styles.contentContainer}>
                <CheckCircle checkStatus={isChecked} onPress={() => handleCheckPress()} />
                <View style={styles.textContainer}>
                    <Text style={isChecked ? styles.label.dimmed : styles.label.default}>{task.text}</Text>
                    {(task.date_deadline || task.subtasks) && (
                        <TaskSublabel
                            dimmedStatus={isChecked}
                            subtext={task.date_deadline ? formatDate(task.date_deadline) : undefined}
                            progress={task.subtasks && getProgress(task.subtasks)}
                            style={{ marginTop: 2 }}
                        />
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 12, // Left padding (12) is set by the Checkmark component
        paddingVertical: 12,
        zIndex: 1,
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.fill.quaternary,
        borderColor: COLORS.separator.withTransparency,
        borderWidth: 1,
        borderRadius: 7,
    },
    textContainer: {
        flex: 1,
        flexWrap: 'wrap',
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        default: {
            width: '100%',
            flexWrap: 'wrap',
            color: COLORS.label.primary,
            ...LABEL.regular.body,
        },
        dimmed: {
            width: '100%',
            flexWrap: 'wrap',
            color: COLORS.default.systemGray[1],
            ...LABEL.regular.body,
        },
    },
});

TaskButton.propTypes = {
    task: P.shape({
        id: P.string.isRequired,
        text: P.string.isRequired,
        completed: P.bool.isRequired,
        date_deadline: P.instanceOf(Date),
        subtasks: P.arrayOf(
            P.shape({
                id: P.string,
                completed: P.bool.isRequired,
                text: P.string,
            }),
        ),
    }),
    showBackground: P.bool,
};
