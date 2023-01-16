import * as React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const FowardArrowIcon = ({ color = 'FFF', height = 14, style, ...props }) => {
    const aspectRatio = 9 / 15;

    return (
        <View style={{ height: height, aspectRatio: aspectRatio, ...style }}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 9 15"
                fill="none"
                {...props}
            >
                <Path
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="m1.5 1.5 6 6-6 6"
                />
            </Svg>
        </View>
    );
};

export default FowardArrowIcon;
