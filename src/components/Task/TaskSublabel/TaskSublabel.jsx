import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import P from 'prop-types';
// Styles
import { LABEL } from '../../../styles/styles.js';
// Constants
import { COLORS } from '../../../constants/colors.js';
// Components
import { ProgressDisplay } from '../ProgressDisplay/ProgressDisplay.jsx';

export const TaskSublabel = ({ dimmedStatus, subtext, progress, style }) => {
    return (
        <View style={{ ...styles.container, ...style }}>
            {subtext && (
                <View style={{ marginRight: 16 }}>
                    <Text style={dimmedStatus ? styles.label.dimmed : styles.label.default}>{subtext}</Text>
                </View>
            )}
            {typeof progress === 'number' && (
                <ProgressDisplay
                    progress={progress}
                    diameter={14}
                    strokeWidth={2.5}
                    emptyColor={COLORS.default.systemGray[4]}
                    progressColor={COLORS.label.secondary}
                    gap={8}
                    textStyle={dimmedStatus ? styles.label.dimmed : styles.label.default}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    progressWrapper: {
        marginLeft: 8,
    },
    label: {
        default: {
            ...LABEL.bold.footnote,
            color: COLORS.label.secondary,
        },
        dimmed: {
            ...LABEL.bold.footnote,
            color: COLORS.default.systemGray[2],
        },
    },
});

TaskSublabel.propTypes = {
    dimmedStatus: P.bool,
    subtext: P.string,
    progress: function (props, propName, componentName) {
        const prop = props[propName];
        if (!(prop === undefined || prop === null || prop === 'none') && (prop < 0 || prop > 1)) {
            return new Error(
                `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Expected a number between 0 and 1, undefined, null or 'none'.`,
            );
        }
    },
    style: P.object,
};
