import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../styles/RootColors';
import LoaderKit from 'react-native-loader-kit'

const Loading = () => {
    return (
        <View style={styles.background}>
            <LoaderKit
                style={{ width: 70, height: 70 }}
                name={'BallSpinFadeLoader'}
                color={`${colors.white}`} 
            />
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
    loader: {
        width: 22,
        height: 22,
        borderRadius: 50,
        backgroundColor: '#25b09b',
        shadowColor: '#25b09b',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 10, // For Android
    },
});

export default Loading;
