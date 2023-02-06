import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import P from 'prop-types';
// Styles
import { LABEL } from '../../styles/styles.js';
// Constants
import { COLORS } from '../../constants/colors';

export const CardTitle = ({ title, day, month, highlight = false, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={highlight ? styles.title.highlight : styles.title.default}>{title}</Text>
            {day && month && (
                <Text style={styles.dateLabel}>
                    {String(day).padStart(2, '0')}
                    {'\n'}
                    {String(month).padStart(2, '0')}
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
        default: {
            ...LABEL.bold.largeTitle,
            color: COLORS.label.primary,
            transform: [{ translateY: -4 }],
        },
        highlight: {
            ...LABEL.bold.largeTitle,
            color: COLORS.default.systemGreen,
            transform: [{ translateY: -4 }],
        },
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
    // Day should be a number beetwen 1 and 31
    day: function (props, propName, componentName) {
        if (props[propName] && (typeof props[propName] !== 'number' || props[propName] < 1 || props[propName] > 31)) {
            return new Error(
                `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Prop should be a number between 1 and 31.`,
            );
        }
    },
    month: function (props, propName, componentName) {
        if (props[propName] && (typeof props[propName] !== 'number' || props[propName] < 1 || props[propName] > 12)) {
            return new Error(
                `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Prop should be a number between 1 and 12.`,
            );
        }
    },
    style: P.object,
};
