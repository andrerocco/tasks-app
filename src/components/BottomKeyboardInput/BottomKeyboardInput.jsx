import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import P from 'prop-types';
// Constants
import { COLORS } from '../../constants/colors';
import { LABEL } from '../../styles/styles';
// Components
import { AutoResizeTextInput } from '../AutoResizeTextInput/AutoResizeTextInput';
import { TintedBlurView } from '../TintedBlurView/TintedBlurView';
import { SendButton } from '../SendButton/SendButton';

export const BottomKeyboardInput = ({ placeholder, marginBottom = 0, hidden = false, onSend }) => {
    const input = useRef('');
    const textInputRef = useRef();
    const [sendActive, setSendActive] = useState(false); // The send button will only be active if the input is not empty/blank

    function handleChangeText(e) {
        input.current = e;
        setSendActive(e.trim() !== '');
    }

    function handleSend() {
        if (input.current.trim() !== '') {
            onSend?.(input.current); // Call the onSend function if it exists
            textInputRef.current.clear(); // Clear the input
            setSendActive(false); // Disable the send button
        }
    }

    return (
        <KeyboardAvoidingView style={{ ...styles.footer, marginBottom: marginBottom }} behavior={'padding'}>
            {!hidden && (
                <TintedBlurView style={styles.container}>
                    <View style={styles.inputContainer}>
                        <AutoResizeTextInput
                            innerRef={textInputRef}
                            placeholder={placeholder}
                            style={styles.input}
                            placeholderTextColor={COLORS.label.secondary}
                            returnKeyType={'enter'}
                            onChangeText={(e) => handleChangeText(e)}
                        />
                        {sendActive && <SendButton onPress={() => handleSend()} style={{ marginLeft: 9 }} />}
                    </View>
                </TintedBlurView>
            )}
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
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    inputContainer: {
        width: '100%',
        paddingVertical: 6,
        paddingHorizontal: 8,
        backgroundColor: COLORS.fill.tertiary,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        paddingLeft: 2,
        flexWrap: 'wrap',
        color: COLORS.label.primary,
        ...LABEL.regular.body,
    },
});

BottomKeyboardInput.propTypes = {
    placeholder: P.string,
    marginBottom: P.number,
    hidden: P.bool,
    onSend: P.func,
};
