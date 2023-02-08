import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import P from 'prop-types';
import * as Haptics from 'expo-haptics';
// Constants
import { COLORS } from '../../constants/colors';
// Components
import SendRectangularIcon from '../../assets/icons/SendRectangular';
import AddRectangularSmallIcon from '../../assets/icons/AddRectangularSmall';

export const SendButton = ({ onPress, style }) => {
    function handlePress() {
        onPress?.();
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); // Haptic feedback
    }

    return (
        <Animated.View
            style={[styles.iconContainer, style]}
            entering={FadeIn.duration(100)}
            exiting={FadeOut.duration(100)}
        >
            <TouchableOpacity hitSlop={{ top: 9, bottom: 9, left: 9, right: 9 }} onPress={() => handlePress()}>
                <SendRectangularIcon color={COLORS.default.systemBlue} />
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        width: 26,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

SendButton.propTypes = {};
