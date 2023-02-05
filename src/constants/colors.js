import { DynamicColorIOS } from 'react-native';

export const COLORS = {
    default: {
        systemRed: DynamicColorIOS({
            light: '#FF3B30',
            dark: '#FF453A',
        }),
        systemOrange: DynamicColorIOS({
            light: '#FF9500',
            dark: '#FF9F0A',
        }),
        systemYellow: DynamicColorIOS({
            light: '#FFCC00',
            dark: '#FFD60A',
        }),
        systemGreen: DynamicColorIOS({
            light: '#34C759',
            dark: '#32D74B', // TODO - Conferir
        }),
        systemTeal: DynamicColorIOS({
            light: '#5AC8FA',
            dark: '#64D2FF',
        }),
        systemBlue: DynamicColorIOS({
            light: '#007AFF',
            dark: '#0A84FF',
        }),
        systemIndigo: DynamicColorIOS({
            light: '#5856D6',
            dark: '#5E5CE6',
        }),
        systemPurple: DynamicColorIOS({
            light: '#AF52DE',
            dark: '#BF5AF2',
        }),
        systemPink: DynamicColorIOS({
            light: '#FF2D55',
            dark: '#FF2D55',
        }),
        systemGray: {
            1: DynamicColorIOS({ light: '#8E8E93', dark: '#8E8E93' }),
            2: DynamicColorIOS({ light: '#AEAEB2', dark: '#636366' }),
            3: DynamicColorIOS({ light: '#C7C7CC', dark: '#48484A' }),
            4: DynamicColorIOS({ light: '#D1D1D6', dark: '#3A3A3C' }),
            5: DynamicColorIOS({ light: '#E5E5EA', dark: '#1C1C1E' }),
            6: DynamicColorIOS({ light: '#F2F2F7', dark: '#1C1C1E' }),
        },
    },
    systemBackground: {
        primary: DynamicColorIOS({
            light: '#F9F9F9',
            dark: '#000000',
        }),
        secondary: DynamicColorIOS({
            light: '#FFFFFF',
            dark: '#1C1C1E',
        }),
        tertiary: DynamicColorIOS({
            light: '#EFEFF4',
            dark: '#2C2C2E',
        }),
        alert: DynamicColorIOS({
            light: 'rgba(242, 242, 242, 0.8)',
            dark: 'rgba(30, 30, 30, 0.75)',
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
            light: 'rgba(116, 116, 128, 0.08)',
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
            light: '#E5E5EA',
            dark: '#38383A',
        }),
        withTransparency: DynamicColorIOS({
            light: 'rgba(60, 60, 67, 0.36)',
            dark: 'rgba(84, 84, 84, 0.88)',
        }),
    },
    custom: {
        screenBackground: DynamicColorIOS({
            light: '#FFFFFF',
            dark: '#121214',
        }),
        tabBarBackground: DynamicColorIOS({
            light: 'rgba(249, 249, 249, 0.94)',
            dark: 'rgba(30, 30, 30, 0.94)',
        }),
        cardBackground: DynamicColorIOS({
            light: 'rgba(255, 255, 255, 0.7)',
            dark: 'rgba(26, 26, 28, 0.7)',
        }),
    },
};
