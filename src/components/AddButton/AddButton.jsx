import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import P from 'prop-types';
// Styles
import { LABEL } from '../../styles/styles';
// Components
import AddRoundIcon from '../../assets/icons/AddRound';
import AddSquaredIcon from '../../assets/icons/AddSquared';
import AddRectangularIcon from '../../assets/icons/AddRectangular';

export const AddButton = ({ color, text, iconType = 'round', style, onPress }) => {
    return (
        <TouchableOpacity style={{ ...styles.container, ...style }} activeOpacity={0.4} onPress={() => onPress?.()}>
            {iconType === 'round' && <AddRoundIcon color={color} />}
            {iconType === 'squared' && <AddSquaredIcon color={color} />}
            {iconType === 'rectangular' && <AddRectangularIcon color={color} />}
            <Text style={styles.label(color)}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: (color) => ({
        color: color,
        marginLeft: 10,
        ...LABEL.bold.body,
    }),
});

AddButton.propTypes = {
    color: P.oneOfType([P.string, P.object]),
    text: P.string,
    iconType: P.oneOf([undefined, 'none', 'round', 'squared', 'rectangular']),
    style: P.object,
    onPress: P.func,
};
