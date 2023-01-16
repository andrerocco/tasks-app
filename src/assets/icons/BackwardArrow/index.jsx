import * as React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const BackwardArrowIcon = ({ color = '#FFF', height = 23, style, ...props }) => {
    const aspectRatio = 13 / 23;

    return (
        <View style={{ height: height, aspectRatio: aspectRatio, ...style }}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={'100%'}
                height={'100%'}
                viewBox="0 0 13 23"
                fill="none"
                {...props}
            >
                <Path
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M11.5 2 2 11.5l9.5 9.5"
                />
            </Svg>
        </View>
    );
};

export default BackwardArrowIcon;
