import * as React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = ({ color = '#FFF', size = 14, ...props }) => (
    <View style={{ height: size, aspectRatio: 1 }}>
        <Svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 14" fill="none" {...props}>
            <Path
                fill="#EBEBF5"
                fillOpacity={0.6}
                fillRule="evenodd"
                d="M7 0c.5 0 1 .4 1 1v5h5a1 1 0 1 1 0 2H8v5a1 1 0 1 1-2 0V8H1a1 1 0 0 1 0-2h5V1c0-.6.4-1 1-1Z"
                clipRule="evenodd"
            />
        </Svg>
    </View>
);

export default SvgComponent;
