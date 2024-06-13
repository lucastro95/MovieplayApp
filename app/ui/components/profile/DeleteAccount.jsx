import React, { useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Button from '../../components/common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import usersWS from '../../../networking/api/endpoints/usersWS';
import { logOut } from '../../../redux/slices/UserSlice';
import I18n from '../../../assets/strings/l18n';


  const DeleteAccount = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const navigation = useNavigation();
  const id = useSelector((state) => state.user.id);

  useEffect(() => {
    if (!loggedIn) {
      navigation.navigate('LogInScreen');
    }
  }, [loggedIn, navigation]);

  const deleteAccount = async (id) => {
    try {
      const response = await usersWS.deleteAccount(id)
    } catch (error) {
      console.log(error);
    }
  };

  const handleAccountDeletion = async () => {
    await deleteAccount(id);
    dispatch(logOut());
    AsyncStorage.removeItem('userToken')
  };

  const deletionAlert = () => {
    Alert.alert (
      I18n.t('profile.alertTitle'), 
      I18n.t('profile.alertDescription'),
      [
        {
          text: I18n.t('profile.alertNo'),
          style: 'cancel'
        },
        {
          text: I18n.t('profile.alertYes'),
          onPress: () => handleAccountDeletion(),
          style: 'destructive'
        },
      ],
      {cancelable: false}
    );
  }

  

 return (
    <View style={styles.container}>
      <Button text={I18n.t('profile.delete')} action = {deletionAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '60%'
  },
});

export default DeleteAccount;