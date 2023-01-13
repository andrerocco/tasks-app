import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import P from 'prop-types';

export const CircularProgressChart = ({
    progress,
    diameter,
    strokeWidth,
    emptyColor = '#AEAEAE',
    progressColor = '#5E5E5E',
}) => {
    const circumference = Math.PI * (diameter - strokeWidth);

    return (
        <Svg width={diameter} height={diameter} fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle
                cx={diameter / 2}
                cy={diameter / 2}
                r={diameter / 2 - strokeWidth / 2}
                strokeWidth={strokeWidth}
                stroke={emptyColor}
            />
            <Circle
                cx={diameter / 2}
                cy={diameter / 2}
                r={diameter / 2 - strokeWidth / 2}
                transform={`rotate(-90 ${diameter / 2} ${diameter / 2})`}
                strokeWidth={strokeWidth}
                stroke={progressColor}
                strokeDasharray={[progress * circumference, circumference]}
            />
        </Svg>
    );
};

CircularProgressChart.propTypes = {
    progress: P.number.isRequired,
    diameter: P.number.isRequired,
    strokeWidth: P.number.isRequired,
    emptyColor: P.string,
    progressColor: P.string,
};
