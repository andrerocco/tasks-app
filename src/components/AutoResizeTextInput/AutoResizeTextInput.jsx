import React, { useState } from 'react';
import { TextInput } from 'react-native';
import P, { oneOfType } from 'prop-types';

export const AutoResizeTextInput = ({
    style,
    placeholderTextColor,
    value,
    placeholder,
    autoCorrect = false,
    returnKeyType = 'done',
    onChangeText,
    onEndEditing,
}) => {
    const [inputHeight, setInputHeight] = useState();

    function handleContentSizeChange(e) {
        setInputHeight(e.nativeEvent.contentSize.height + 4); // Adds 4 to prevent clipping
    }

    return (
        <TextInput
            multiline
            style={{ width: '100%', paddingTop: 0, height: inputHeight, ...style }}
            placeholderTextColor={placeholderTextColor}
            value={value}
            placeholder={placeholder}
            autoCorrect={autoCorrect}
            returnKeyType={returnKeyType}
            blurOnSubmit={true}
            onChangeText={(e) => onChangeText?.(e)}
            onEndEditing={(e) => onEndEditing?.(e)}
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
    onChangeText: P.func,
    onEndEditing: P.func,
};
