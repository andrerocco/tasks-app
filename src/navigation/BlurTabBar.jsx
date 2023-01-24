import React from 'react';
import { useColorScheme } from 'react-native';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
// Constants
import { COLORS } from '../constants/colors';

export const BlurTabBar = (props) => {
    const mode = useColorScheme();

    return (
        <BlurView
            style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: COLORS.custom.tabBarBackground,
                borderTopColor: COLORS.separator.withTransparency,
                borderTopWidth: 0.33,
                paddingTop: 4,
            }}
            tint={mode ? mode : 'default'}
            intensity={48}
        >
            <BottomTabBar {...props} />
        </BlurView>
    );
};
