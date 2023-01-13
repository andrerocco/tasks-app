import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import P from 'prop-types';
// Components
import { CircularProgressChart } from '../CircularProgressChart';

export const ProgressLabel = ({
    stepsCompleted,
    stepsTotal,
    diameter,
    strokeWidth,
    emptyColor,
    progressColor,
    textStyle,
    gap,
}) => {
    return (
        <View style={styles.container}>
            <View style={{ marginRight: gap }}>
                <CircularProgressChart
                    progress={stepsCompleted / stepsTotal}
                    diameter={diameter}
                    strokeWidth={strokeWidth}
                    emptyColor={emptyColor}
                    progressColor={progressColor}
                />
            </View>
            <Text style={textStyle}>{parseInt((stepsCompleted / stepsTotal) * 100)}%</Text>
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

ProgressLabel.propTypes = {
    stepsCompleted: P.number.isRequired,
    stepsTotal: P.number.isRequired,
    diameter: P.number.isRequired,
    strokeWidth: P.number.isRequired,
    emptyColor: P.oneOfType([P.string, P.object]),
    progressColor: P.oneOfType([P.string, P.object]),
    textStyle: P.object,
    gap: P.number,
};
