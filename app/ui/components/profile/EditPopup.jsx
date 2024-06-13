import React, { useState } from 'react';
import { Modal, View, TextInput, StyleSheet, Text } from 'react-native';
import I18n from '../../../assets/strings/l18n';
import { colors } from '../../styles/RootColors';
import Button from '../common/Button';

const EditPopup = ({ visible, onClose, onSave, fieldToEdit }) => {
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [nickname, setNickname] = useState("")

    const handleSave = () => {
        onSave(name, lastname, nickname);
        onClose();
        setName("")
        setLastname("")
        setNickname("")
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{I18n.t("profile.edit")}</Text>
                    {fieldToEdit === "name" ?
                        <>
                            <TextInput
                                style={styles.input}
                                placeholder={I18n.t('profile.name')}
                                value={name}
                                onChangeText={setName}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder={I18n.t('profile.lastName')}
                                value={lastname}
                                onChangeText={setLastname}
                            />
                        </>
                        :
                        <TextInput
                            style={styles.input}
                            placeholder={I18n.t('profile.nickname')}
                            value={nickname}
                            onChangeText={setNickname}
                        />
                    }
                    <Button text={I18n.t('send')} action={handleSave} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${colors.pink}66`,
    },
    modalView: {
        width: '80%',
        backgroundColor: `${colors.white}`,
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
        color: `${colors.blue}`
    },
    input: {
        height: 40,
        padding: 10,
        borderColor: `${colors.pink}`,
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 15,
        width: '100%',
        marginBottom: 15,
    },
});

export default EditPopup;
