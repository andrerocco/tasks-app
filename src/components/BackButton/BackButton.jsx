import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import P from 'prop-types';
// Styles
import { LABEL } from '../../styles/styles';
// Components
import BackwardArrowIcon from '../../assets/icons/BackwardArrow';

export const BackButton = ({ text, color = '#FFF', onPress }) => {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.4} style={styles.container} onPress={onPress}>
                <BackwardArrowIcon color={color} style={styles.backwardArrow} />
                <Text style={styles.label(color)}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 14,
        paddingVertical: 8,
    },
    backwardArrow: {
        marginRight: 8,
    },
    label: (color) => ({
        color: color,
        ...LABEL.regular.body,
    }),
});

BackButton.propTypes = {
    text: P.string.isRequired,
    color: P.oneOfType([P.string, P.object]),
    onPress: P.func,
};
