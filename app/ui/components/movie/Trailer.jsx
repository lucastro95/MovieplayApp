import React, { useState, useCallback } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View, Alert, Button, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { colors } from '../../styles/RootColors';
import YoutubePlayer from "react-native-youtube-iframe";

const Trailer = ({ visible, onClose, movie }) => {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
        }
    }, []);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity style={styles.close} onPress={onClose}>
                        <Icon name='close' color={colors.pink} size={35} />
                    </TouchableOpacity>
                    <View style={styles.video}>
                        <YoutubePlayer
                            height={200}
                            play={playing}
                            videoId={movie.video}
                            onChangeState={onStateChange}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${colors.popup}`,
    },
    modalView: {
        width: '90%',
        backgroundColor: `${colors.blue}`,
        borderRadius: 20,
        padding: 30,
        paddingTop: 60,
        alignItems: 'center',
    },
    close: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    video: {
        width: '100%'
    }
});

export default Trailer;
