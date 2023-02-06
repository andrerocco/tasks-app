import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import P from 'prop-types';
// Constants
import { COLORS } from '../../constants/colors';
import { LABEL } from '../../styles/styles';
// Components
import { AutoResizeTextInput } from '../AutoResizeTextInput/AutoResizeTextInput';
import { BlurView } from 'expo-blur';

export const BottomKeyboardInput = ({ marginBottom = 0, placeholder }) => {
    return (
        <KeyboardAvoidingView style={{ ...styles.footer, marginBottom: marginBottom }} behavior={'padding'}>
            <BlurView style={styles.container} tint={'default'} intensity={48}>
                <View style={styles.inputContainer}>
                    <AutoResizeTextInput
                        placeholder={placeholder}
                        style={styles.input}
                        placeholderTextColor={COLORS.label.secondary}
                        returnKeyType={'enter'}
                        onFocus={() => console.log('focus')}
                        onBlur={() => console.log('blur')}
                    />
                </View>
            </BlurView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: COLORS.custom.tabBarBackground,
        borderTopColor: COLORS.separator.withTransparency,
        borderTopWidth: 0.33,
    },
    container: {
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    inputContainer: {
        paddingVertical: 7,
        paddingHorizontal: 9,
        backgroundColor: COLORS.fill.tertiary,
        borderRadius: 10,
    },
    input: {
        flexWrap: 'wrap',
        color: COLORS.label.primary,
        ...LABEL.regular.body,
    },
});

BottomKeyboardInput.propTypes = {
    marginBottom: P.number,
};
