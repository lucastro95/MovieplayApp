import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../../components/common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import usersWS from '../../../networking/api/endpoints/usersWS';
import { logOut } from '../../../redux/slices/UserSlice';


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

  return (
    <View style={styles.container}>
      <Button text="Delete Account" action={handleAccountDeletion} />
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