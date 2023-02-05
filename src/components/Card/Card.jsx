import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import P from 'prop-types';
// Constants
import { COLORS } from '../../constants/colors.js';

export const Card = ({ children, style }) => {
    return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        paddingVertical: 14,
        paddingHorizontal: 4,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: COLORS.separator.noTransparency,
        backgroundColor: COLORS.custom.cardBackground,
    },
});

Card.propTypes = {
    children: P.oneOfType([P.string, P.element, P.node]),
    style: P.object,
};
