import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import P from 'prop-types';
// Styles
import { LABEL } from '../../styles/styles.js';
// Components
import { CheckCircle } from '../CheckCircle/index.jsx';
// Constants
import { COLORS } from '../../constants/colors.js';

export const LabelledCheckButton = ({ children, initalCheckedStatus }) => {
    const [isChecked, setIsChecked] = useState(initalCheckedStatus);

    return (
        <View style={styles.container}>
            <CheckCircle initialCheckStatus={false} onPress={(checkStatus) => setIsChecked(checkStatus)} />
            <Text style={isChecked ? styles.label.default : styles.label.crossed}>{children}</Text>
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
    label: {
        default: {
            flex: 1,
            flexWrap: 'wrap',
            color: COLORS.systemGray[1],
            ...LABEL.regular.body,
        },
        crossed: {
            flex: 1,
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
