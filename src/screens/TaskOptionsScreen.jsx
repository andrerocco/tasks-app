import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Safe Area
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Constants
import { COLORS } from '../constants/colors';
// Components
import { BackButton } from '../components/BackButton/BackButton';
import { EditableTaskButton } from '../components/Task/EditableTaskButton';
import { Divider } from '../components/Divider/Divider';
import { AddButton } from '../components/AddButton/AddButton';

export const TaskOptionsScreen = ({ navigation }) => {
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
                <EditableTaskButton placeholder={'Digite o texto da tarefa aqui...'} />
                <Divider color={COLORS.separator.withTransparency} style={{ marginTop: 4, marginBottom: 4 }} />
                <View>
                    <EditableTaskButton />
                    <EditableTaskButton />
                    <EditableTaskButton />
                    <AddButton iconType={'squared'} text={'Adicionar etapa...'} color={COLORS.default.systemGreen} />
                </View>
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
