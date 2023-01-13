import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import P from 'prop-types';
import * as Haptics from 'expo-haptics';
// Components
import CheckmarkIcon from '../../../assets/icons/Checkmark';
// Constants
import { COLORS } from '../../../constants/colors';

export const CheckCircle = ({ checkStatus, onPress }) => {
    function handlePress() {
        /* Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); */
        Haptics.selectionAsync(); // Haptic feedback
        onPress();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handlePress()} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
                {checkStatus && <CheckmarkIcon color={COLORS.label.secondary} />}
                {!checkStatus && <View style={styles.circleBorder} />}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 12,
    },
    circleBorder: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: COLORS.label.tertiary,
    },
});

CheckCircle.propTypes = {
    checkedStatus: P.bool,
    onPress: P.func.isRequired,
};
