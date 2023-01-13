import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import P from 'prop-types';
// Styles
import { LABEL } from '../../styles/styles.js';
// Constants
import { COLORS } from '../../constants/colors.js';
// Components
import { CheckCircle } from './CheckCircle/CheckCircle.jsx';
import { TaskSublabel } from './TaskSublabel/TaskSublabel.jsx';

export const TaskButton = ({ children, initalCheckedStatus = false }) => {
    const [isChecked, setIsChecked] = useState(initalCheckedStatus);

    function handleCheckPress() {
        setIsChecked((isChecked) => !isChecked);
    }

    return (
        <View style={styles.container}>
            <CheckCircle checkStatus={isChecked} onPress={() => handleCheckPress()} />
            <View style={styles.textContainer}>
                <Text style={isChecked ? styles.label.default : styles.label.dimmed}>{children}</Text>
                <TaskSublabel
                    dimmedStatus={isChecked}
                    subtext="Sexta, 10/12"
                    stepsCompleted={1}
                    stepsTotal={3}
                    style={{ marginTop: 4 }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10, // Left padding is set by the Checkmark component
        paddingVertical: 12,
    },
    textContainer: {
        flex: 1,
        flexWrap: 'wrap',
        /* backgroundColor: 'blue', */

        display: 'flex',
        flexDirection: 'column',
    },
    descriptionContainer: {
        width: '100%',
        marginTop: 4,
        display: 'flex',
        flexDirection: 'row',
    },

    label: {
        default: {
            width: '100%',
            flexWrap: 'wrap',
            color: COLORS.systemGray[1],
            ...LABEL.regular.body,
        },
        dimmed: {
            width: '100%',
            flexWrap: 'wrap',
            color: COLORS.label.primary,
            ...LABEL.regular.body,
        },
    },
});

TaskButton.propTypes = {
    children: P.oneOfType([P.string, P.element, P.node]),
    checkedStatus: P.bool,
};
