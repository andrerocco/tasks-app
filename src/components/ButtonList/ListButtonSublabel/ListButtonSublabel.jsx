import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import P from 'prop-types';
// Styles
import { LABEL } from '../../../styles/styles';
// Constants
import { COLORS } from '../../../constants/colors';
// Components
import FowardArrowIcon from '../../../assets/icons/FowardArrow';

export const ListButtonSublabel = ({ text = '', showFowardArrow = false }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{text}</Text>
            {showFowardArrow && (
                <View style={styles.arrowContainer}>
                    <FowardArrowIcon color={COLORS.label.tertiary} />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        color: COLORS.label.secondary,
        ...LABEL.regular.body,
    },
    arrowContainer: {
        marginLeft: 10,
    },
});

ListButtonSublabel.propTypes = {
    text: P.string,
    showFowardArrow: P.bool,
};
