import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import P from 'prop-types';
// Components
import { CircularProgressChart } from '../../CircularProgressChart/CircularProgressChart.jsx';

export const ProgressDisplay = ({ progress, diameter, strokeWidth, emptyColor, progressColor, textStyle, gap }) => {
    return (
        <View style={styles.container}>
            <View style={{ marginRight: gap }}>
                <CircularProgressChart
                    progress={progress}
                    diameter={diameter}
                    strokeWidth={strokeWidth}
                    emptyColor={emptyColor}
                    progressColor={progressColor}
                />
            </View>
            <Text style={textStyle}>{parseInt(progress * 100)}%</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
});

ProgressDisplay.propTypes = {
    progress: function (props, propName, componentName) {
        if (props[propName] < 0 || props[propName] > 1) {
            return new Error(
                `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Expected a number between 0 and 1.`,
            );
        }
    },
    diameter: P.number.isRequired,
    strokeWidth: P.number.isRequired,
    emptyColor: P.oneOfType([P.string, P.object]),
    progressColor: P.oneOfType([P.string, P.object]),
    textStyle: P.object,
    gap: P.number,
};
