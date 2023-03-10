import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import P from 'prop-types';
// Styles
import { LABEL } from '../../styles/styles.js';
// Constants
import { COLORS } from '../../constants/colors.js';
// Components
import { CheckCircle } from './CheckCircle/CheckCircle';
import { AutoResizeTextInput } from '../AutoResizeTextInput/AutoResizeTextInput.jsx';

export const EditableTaskButton = ({ initalCheckedStatus = false, placeholder, style }) => {
    const [isChecked, setIsChecked] = useState(initalCheckedStatus);

    function handleCheckPress() {
        setIsChecked((isChecked) => !isChecked);
    }

    return (
        <View style={styles.container}>
            <View style={{ ...styles.contentContainer, ...style }}>
                <CheckCircle style={styles.checkCircle} checkStatus={isChecked} onPress={() => handleCheckPress()} />
                <View style={styles.textContainer}>
                    <AutoResizeTextInput
                        style={{ ...styles.label.default }}
                        placeholderTextColor={COLORS.label.secondary}
                        placeholder={placeholder}
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
        zIndex: 1,
    },
    checkCircle: {
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    textContainer: {
        flex: 1,
        flexWrap: 'wrap',
        display: 'flex',
        flexDirection: 'column',
        paddingVertical: 8,
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

EditableTaskButton.propTypes = {
    initalCheckedStatus: P.bool,
    style: P.object,
};
