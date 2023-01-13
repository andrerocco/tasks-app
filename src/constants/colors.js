import { DynamicColorIOS } from 'react-native';

export const COLORS = {
    systemBackground: {
        primary: DynamicColorIOS({
            light: '#FFFFFF',
            dark: '#000000',
        }),
        secondary: DynamicColorIOS({
            light: '#F2F2F7',
            dark: '#1C1C1E',
        }),
        tertiary: DynamicColorIOS({
            light: '#E5E5EA',
            dark: '#2C2C2E',
        }),
    },
    fill: {
        primary: DynamicColorIOS({
            light: 'rgba(120, 120, 128, 0.2)',
            dark: 'rgba(120, 120, 128, 0.36)',
        }),
        secondary: DynamicColorIOS({
            light: 'rgba(120, 120, 128, 0.16)',
            dark: 'rgba(120, 120, 128, 0.32)',
        }),
        tertiary: DynamicColorIOS({
            light: 'rgba(118, 118, 128, 0.12)',
            dark: 'rgba(118, 118, 128, 0.24)',
        }),
        quaternary: DynamicColorIOS({
            light: 'rgba(116, 116, 128, 0.8)',
            dark: 'rgba(116, 116, 128, 0.18)',
        }),
    },
    label: {
        primary: DynamicColorIOS({
            light: '#000000',
            dark: '#FFFFFF',
        }),
        secondary: DynamicColorIOS({
            light: 'rgba(60, 60, 67, 0.6)',
            dark: 'rgba(235, 235, 245, 0.6)',
        }),
        tertiary: DynamicColorIOS({
            light: 'rgba(60, 60, 67, 0.3)',
            dark: 'rgba(235, 235, 245, 0.3)',
        }),
        quaternary: DynamicColorIOS({
            light: 'rgba(60, 60, 67, 0.18)',
            dark: 'rgba(235, 235, 245, 0.18)',
        }),
    },
    separator: {
        noTransparency: DynamicColorIOS({
            light: '#C6C6C8',
            dark: '#38383A',
        }),
        withTransparency: DynamicColorIOS({
            light: 'rgba(60, 60, 67, 0.36)',
            dark: 'rgba(235, 235, 245, 0.65)',
        }),
    },
    systemGray: {
        1: DynamicColorIOS({ light: '#8E8E93', dark: '#8E8E93' }),
        2: DynamicColorIOS({ light: '#AEAEB2', dark: '#636366' }),
        3: DynamicColorIOS({ light: '#C7C7CC', dark: '#48484A' }),
        4: DynamicColorIOS({ light: '#D1D1D6', dark: '#3A3A3C' }),
        5: DynamicColorIOS({ light: '#E5E5EA', dark: '#1C1C1E' }),
        6: DynamicColorIOS({ light: '#F2F2F7', dark: '#1C1C1E' }),
    },
};
