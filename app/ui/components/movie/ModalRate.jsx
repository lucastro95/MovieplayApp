import React, { useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Star from 'react-native-vector-icons/FontAwesome';
import I18n from '../../../assets/strings/l18n';
import { colors } from '../../styles/RootColors';
import Button from '../common/Button';

const ModalRate = ({ visible, onClose, user }) => {
  const [rating, setRating] = useState(0);

  const handleStarPress = (star) => {
    setRating(star);
  };

  const handleSend = () => {
    console.log('Rating:' + rating);
    onClose()
  }

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
          <View style={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
                <Star
                  name='star'
                  color={star <= rating ? colors.pink : colors.white}
                  size={35}
                />
              </TouchableOpacity>
            ))}
          </View>
          <Button text={I18n.t('send')} action={handleSend} />
        </View>
      </View>
    </Modal>
  )
}

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
  },
  stars: {
    width: '75%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20
  }
});

export default ModalRate;
