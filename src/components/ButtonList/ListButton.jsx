import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import P from 'prop-types';
// Styles
import { LABEL } from '../../styles/styles';
// Constants
import { COLORS } from '../../constants/colors';

export const ListButton = ({ icon, text, rightContent }) => {
    return (
        <TouchableOpacity style={styles.container}>
            {icon && <View style={styles.iconContainer}>{icon}</View>}
            <View style={styles.contentContainer}>
                <Text style={styles.label}>{text}</Text>
                <View>{rightContent}</View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 48,
        flexDirection: 'row',

        alignItems: 'center',
    },
    iconContainer: {
        width: 48,
        height: 48,
        marginRight: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 18,
    },
    label: {
        color: COLORS.label.primary,
        ...LABEL.regular.body,
    },
});

ListButton.propTypes = {
    icon: P.node,
    text: P.string,
    rightContent: P.oneOfType([P.string, P.element, P.node]),
};
