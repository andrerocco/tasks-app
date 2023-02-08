import * as React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const SendRectangularIcon = ({ color = '#FFF', height = 24, ...props }) => (
    <View style={{ height: height, aspectRatio: 26 / 22 }}>
        <Svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none" {...props}>
            <Path
                fill={color}
                fillRule="evenodd"
                d="M.344 5.678C0 6.813 0 8.208 0 11c0 2.791 0 4.187.344 5.322a8 8 0 0 0 5.334 5.334C6.813 22 8.208 22 11 22h4c2.791 0 4.187 0 5.322-.345a8 8 0 0 0 5.334-5.333C26 15.187 26 13.792 26 11c0-2.791 0-4.187-.345-5.322A8 8 0 0 0 20.322.344C19.187 0 17.792 0 15 0h-4C8.209 0 6.813 0 5.678.344A8 8 0 0 0 .344 5.678Zm8.407 11.111c-.605.268-1.137.31-1.491-.045-.437-.437-.26-.941.068-1.541l1.326-2.585c.223-.413.441-.595.846-.618l7.5-.816c.114-.014.195-.087.19-.182-.004-.096-.072-.172-.195-.187L9.5 10c-.432-.014-.623-.195-.841-.614L7.3 6.756c-.31-.582-.468-1.069-.037-1.5.355-.355.896-.305 1.437-.064l10.902 4.864c.277.123.5.264.65.414.328.327.328.736.005 1.06-.155.154-.378.286-.655.408L8.751 16.79Z"
                clipRule="evenodd"
            />
        </Svg>
    </View>
);

export default SendRectangularIcon;
