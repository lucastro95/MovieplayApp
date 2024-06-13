import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors } from '../../styles/RootColors';

const Loading = () => {
    return (
        <View style={styles.background}>
            <ActivityIndicator size={100} color={colors.white} />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: `${colors.pink}66`,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
    },
});

export default Loading;
