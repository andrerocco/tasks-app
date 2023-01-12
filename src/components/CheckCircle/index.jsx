import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import P from 'prop-types';
// Components
import CheckmarkIcon from '../../assets/icons/Checkmark';
// Constants
import { COLORS } from '../../constants/colors';

export const CheckCircle = ({ initialCheckStatus = false, onPress }) => {
    const [isChecked, setIsChecked] = useState(initialCheckStatus);

    const handlePress = () => {
        if (typeof onPress === 'function') {
            onPress(!isChecked); // Callsback the passed function and passes the status as a parameter
        }
        setIsChecked((isChecked) => !isChecked); // Toggles the
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handlePress()} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
                {isChecked && <CheckmarkIcon color={COLORS.label.secondary} />}
                {!isChecked && <View style={styles.circleBorder} />}
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
