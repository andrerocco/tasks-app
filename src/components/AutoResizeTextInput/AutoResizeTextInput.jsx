import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import P, { oneOfType } from 'prop-types';

export const AutoResizeTextInput = ({
    style,
    placeholderTextColor,
    value,
    placeholder,
    autoCorrect = false,
    returnKeyType = 'done',
    onFocus,
    onBlur,
    onChangeText,
    onSubmitEditing,
}) => {
    const [inputHeight, setInputHeight] = useState();

    function handleContentSizeChange(e) {
        setInputHeight(e.nativeEvent.contentSize.height + 4); // Adds 4 to prevent clipping
    }

    return (
        <TextInput
            multiline
            style={{ flex: 1, paddingTop: 0, overflow: 'visible', height: inputHeight, ...style }}
            placeholderTextColor={placeholderTextColor}
            value={value}
            placeholder={placeholder}
            autoCorrect={autoCorrect}
            returnKeyType={returnKeyType}
            blurOnSubmit={true}
            onFocus={(e) => onFocus?.(e)}
            onBlur={(e) => onBlur?.(e)}
            onChangeText={(e) => onChangeText?.(e)}
            onSubmitEditing={(e) => onSubmitEditing?.(e)}
            onContentSizeChange={(e) => handleContentSizeChange(e)}
        />
    );
};

AutoResizeTextInput.propTypes = {
    style: P.object,
    placeholder: P.string,
    placeholderTextColor: oneOfType([P.string, P.object]),
    value: P.string,
    autoCorrect: P.bool,
    returnKeyType: P.string,
    onFocus: P.func,
    onBlur: P.func,
    onChangeText: P.func,
    onSubmitEditing: P.func,
};
