import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CheckmarkIcon = ({ color = '#000', ...props }) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
        <Path
            fill={color}
            fillRule="evenodd"
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Zm5.793-14.389a1.25 1.25 0 0 0-1.768-1.768L9.818 14.05l-1.843-1.843a1.25 1.25 0 0 0-1.768 1.768l2.727 2.727a1.25 1.25 0 0 0 1.768 0l7.091-7.09Z"
            clipRule="evenodd"
        />
    </Svg>
);

export default CheckmarkIcon;
