import { StyleSheet } from 'react-native';

export const LABEL = StyleSheet.create({
    regular: {
        body: {
            fontSize: 17,
            fontWeight: '400',
            lineHeight: 22,
        },
    },
    bold: {
        captionSmall: {
            fontSize: 11,
            fontWeight: '600',
            lineHeight: 13,
        },
        captionMedium: {
            fontSize: 12,
            fontWeight: '500',
            lineHeight: 16,
        },
        footnote: {
            fontSize: 13,
            fontWeight: '600',
            lineHeight: 18,
        },
        subheadline: {
            fontSize: 15,
            fontWeight: '400',
            lineHeight: 20,
        },
    },
});
