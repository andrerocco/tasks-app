import { StyleSheet, View } from 'react-native';
import React, { Children } from 'react';
// Constants
import { COLORS } from '../../constants/colors';

export const ButtonList = ({ children }) => {
    // TODO Adicionar separators
    return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        width: '100%',
        backgroundColor: COLORS.systemBackground.secondary,
        borderRadius: 9,
    },
});
