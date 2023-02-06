import React from 'react';
import { BlurView } from 'expo-blur';
import { useColorScheme } from 'react-native';

export type Props = {
    children?: React.ReactNode;
    intensity?: number;
};

export const TintedBlurView: React.FC<Props> = ({ children, intensity, ...props }) => {
    const mode = useColorScheme();

    return (
        <BlurView {...props} intensity={intensity ? intensity : 48} tint={mode ? mode : 'default'}>
            {children}
        </BlurView>
    );
};
