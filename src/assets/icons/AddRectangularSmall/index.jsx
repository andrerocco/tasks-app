import * as React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const AddRectangularSmallIcon = ({ color = '#FFF', height = 22, ...props }) => (
    <View style={{ height: height, aspectRatio: 26 / 22 }}>
        <Svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 26 22" fill="none" {...props}>
            <Path
                fill={color}
                fillRule="evenodd"
                d="M.34 5.68C0 6.8 0 8.2 0 11c0 2.8 0 4.19.34 5.32a8 8 0 0 0 5.34 5.34C6.8 22 8.2 22 11 22h4c2.8 0 4.19 0 5.32-.34a8 8 0 0 0 5.34-5.34C26 15.2 26 13.8 26 11c0-2.8 0-4.19-.34-5.32A8 8 0 0 0 20.32.34C19.2 0 17.8 0 15 0h-4C8.2 0 6.81 0 5.68.34A8 8 0 0 0 .34 5.68ZM14.5 7a1.5 1.5 0 0 0-3 0v2.44H9a1.5 1.5 0 1 0 0 3h2.5v2.45a1.5 1.5 0 1 0 3 0v-2.45H17a1.5 1.5 0 0 0 0-3h-2.5V7Z"
                clipRule="evenodd"
            />
        </Svg>
    </View>
);

export default AddRectangularSmallIcon;
