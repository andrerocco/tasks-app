import * as React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const AddSquaredIcon = ({ color = '#FFF', size = 24, ...props }) => (
    <View style={{ height: size, aspectRatio: 1 }}>
        <Svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
            <Path
                fill={color}
                fillRule="evenodd"
                d="M0 12c0-3.73 0-5.6.6-7.06A8 8 0 0 1 4.95.6C6.4 0 8.27 0 12 0s5.6 0 7.06.6a8 8 0 0 1 4.33 4.34C24 6.4 24 8.27 24 12c0 3.73 0 5.6-.6 7.06a8 8 0 0 1-4.34 4.33C17.6 24 15.73 24 12 24c-3.73 0-5.6 0-7.06-.6A8 8 0 0 1 .6 19.05C0 17.6 0 15.73 0 12Zm12-6.7c.69 0 1.25.56 1.25 1.25v4.2h4.2a1.25 1.25 0 1 1 0 2.5h-4.2v4.2a1.25 1.25 0 1 1-2.5 0v-4.2h-4.2a1.25 1.25 0 1 1 0-2.5h4.2v-4.2c0-.7.56-1.25 1.25-1.25Z"
                clipRule="evenodd"
            />
        </Svg>
    </View>
);

export default AddSquaredIcon;
