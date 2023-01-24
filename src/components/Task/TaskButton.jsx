import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import P from 'prop-types';
// Styles
import { LABEL } from '../../styles/styles.js';
// Constants
import { COLORS } from '../../constants/colors.js';
// Components
import { CheckCircle } from './CheckCircle/CheckCircle';
import { TaskSublabel } from './TaskSublabel/TaskSublabel';

export const TaskButton = ({ children, initalCheckedStatus = false, showBackground = false }) => {
    const [isChecked, setIsChecked] = useState(initalCheckedStatus);

    function handleCheckPress() {
        setIsChecked((isChecked) => !isChecked);
    }

    return (
        <View style={styles.container}>
            <View style={{ ...styles.background, opacity: showBackground ? '1' : '0' }} />
            <View style={styles.contentContainer}>
                <CheckCircle checkStatus={isChecked} onPress={() => handleCheckPress()} />
                <View style={styles.textContainer}>
                    <Text style={isChecked ? styles.label.dimmed : styles.label.default}>{children}</Text>
                    <TaskSublabel
                        dimmedStatus={isChecked}
                        subtext="Sexta, 10/12"
                        stepsCompleted={1}
                        stepsTotal={3}
                        style={{ marginTop: 4 }}
                    />
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
        paddingRight: 10, // Left padding is set by the Checkmark component
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
    children: P.oneOfType([P.string, P.element, P.node]),
    checkedStatus: P.bool,
};
