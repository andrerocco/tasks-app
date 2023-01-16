import * as React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const AddRoundIcon = ({ color = '#FFF', size, ...props }) => (
    <View style={{ height: size, aspectRatio: 1 }}>
        <Svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
            <Path
                fill={color}
                fillRule="evenodd"
                d="M24 12a12 12 0 1 1-24 0 12 12 0 0 1 24 0ZM12 5.75c.69 0 1.25.56 1.25 1.25v3.75H17a1.25 1.25 0 1 1 0 2.5h-3.75V17a1.25 1.25 0 1 1-2.5 0v-3.75H7a1.25 1.25 0 1 1 0-2.5h3.75V7c0-.69.56-1.25 1.25-1.25Z"
                clipRule="evenodd"
            />
        </Svg>
    </View>
);

export default AddRoundIcon;
