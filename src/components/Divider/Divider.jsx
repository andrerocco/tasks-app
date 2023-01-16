import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import P from 'prop-types';

export const Divider = ({ strokeWidth = 1, color, leadingInset, trailingInset, style }) => {
    return (
        <View
            style={{
                width: '100%',
                height: strokeWidth,
                borderRadius: strokeWidth / 2,
                backgroundColor: color,
                paddingLeft: leadingInset,
                paddingRight: trailingInset,
                ...style,
            }}
        />
    );
};

Divider.propTypes = {
    strokeWidth: P.number,
    color: P.oneOfType([P.string, P.object]),
    leadingInset: P.number,
    trailingInset: P.number,
    style: P.object,
};
