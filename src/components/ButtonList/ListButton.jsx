import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import P from 'prop-types';
// Styles
import { LABEL } from '../../styles/styles';
// Constants
import { COLORS } from '../../constants/colors';

export const ListButton = ({ text, icon, rightContent, onPress }) => {
    return (
        <TouchableHighlight onPress={() => onPress?.()} underlayColor={COLORS.systemBackground.tertiary}>
            <View style={styles.container}>
                {icon && <View style={styles.iconContainer}>{icon}</View>}
                <View style={styles.contentContainer}>
                    <Text style={styles.label}>{text}</Text>
                    <View>{rightContent}</View>
                </View>
            </View>
        </TouchableHighlight>
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
    text: P.string,
    icon: P.node,
    rightContent: P.oneOfType([P.string, P.element, P.node]),
    onPress: P.func,
};
