import React, { useState } from 'react';
import { TextInput } from 'react-native';
import P, { oneOfType } from 'prop-types';

// This component sets up the TextInput component that automatically resizes the input to fit the text

// USAGE:
// To avoid the component from re-rendering every time the text changes, use the useRef hook to store the input instead of useState.
// You can clear the input by setting a ref to the innerRef prop and calling the yourInnerRefName.current.clear() method on it.

export const AutoResizeTextInput = ({
    innerRef,
    style,
    placeholderTextColor,
    value,
    placeholder,
    autoCorrect = true,
    spellCheck = false,
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
            ref={innerRef}
            multiline
            style={{ flex: 1, paddingTop: 0, overflow: 'visible', height: inputHeight, ...style }}
            placeholderTextColor={placeholderTextColor}
            value={value}
            placeholder={placeholder}
            autoCorrect={autoCorrect}
            spellCheck={spellCheck}
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
