import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import P from 'prop-types';
// Styles
import { LABEL } from '../../styles/styles.js';
// Constants
import { COLORS } from '../../constants/colors';

export const CardTitle = ({ title, day, month }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {day && month && (
                <Text style={styles.dateLabel}>
                    {day}
                    {'\n'}
                    {month}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        ...LABEL.bold.largeTitle,
        color: COLORS.label.primary,
        transform: [{ translateY: -4 }],
    },
    dateLabel: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 16,
        color: COLORS.label.tertiary,
        textAlign: 'center',
    },
});

CardTitle.propTypes = {
    title: P.string.isRequired,
    day: P.string,
    month: P.string,
};
