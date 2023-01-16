import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Safe Area
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Constants
import { COLORS } from '../constants/colors';
// Components
import { BackButton } from '../components/BackButton/BackButton';
import { EditableTaskButton } from '../components/Task/EditableTaskButton';

export const TaskCreationScreen = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const verticalPaddings = { paddingTop: insets.top, paddingBottom: insets.bottom };

    return (
        <View style={{ ...verticalPaddings, ...styles.container }}>
            <BackButton
                color={COLORS.label.secondary}
                text={'Voltar'}
                onPress={() => (navigation.canGoBack() ? navigation.goBack() : undefined)}
            />
            <View style={styles.contentContainer}>
                <EditableTaskButton />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.custom.screenBackground,
    },
    contentContainer: {
        paddingHorizontal: 16,
        flexDirection: 'column',
    },
});
