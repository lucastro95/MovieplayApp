import React from 'react';
import { Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native-animatable';
import { colors } from '../../styles/RootColors';
import Icon from 'react-native-vector-icons/AntDesign';
import I18n from '../../../assets/strings/l18n';
import Button from './Button';

const ErrorModal = ({ visible, noconnection, onClose }) => {
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
          <Text style={styles.text}>{noconnection ? I18n.t('error.connection') : I18n.t('error.oops')}</Text>
          <Button text={I18n.t('error.tryAgain')} action={onClose} />
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
    backgroundColor: `${colors.popup}`,
  },
  modalView: {
    width: '80%',
    backgroundColor: `${colors.blue}`,
    borderRadius: 20,
    padding: 30,
    paddingTop: 40,
    alignItems: 'center',
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  text: {
    color: `${colors.white}`,
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10
  }
});

export default ErrorModal;
