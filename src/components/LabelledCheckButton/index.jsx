import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import P from 'prop-types';
// Styles
import { LABEL } from '../../styles/styles.js';
// Components
import { CheckCircle } from '../CheckCircle/index.jsx';
// Constants
import { COLORS } from '../../constants/colors.js';
import { CheckButtonSublabel } from '../CheckButtonSublabel/index.jsx';

export const LabelledCheckButton = ({ children, initalCheckedStatus = false }) => {
    const [isChecked, setIsChecked] = useState(initalCheckedStatus);

    function handleCheckPress() {
        setIsChecked((isChecked) => !isChecked);
    }

    return (
        <View style={styles.container}>
            <CheckCircle checkStatus={isChecked} onPress={() => handleCheckPress()} />
            <View style={styles.textContainer}>
                <Text style={isChecked ? styles.label.default : styles.label.dimmed}>{children}</Text>
                <CheckButtonSublabel dimmedStatus={isChecked} style={{ marginTop: 4 }} />
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

LabelledCheckButton.propTypes = {
    children: P.oneOfType([P.string, P.element, P.node]),
    checkedStatus: P.bool,
};
