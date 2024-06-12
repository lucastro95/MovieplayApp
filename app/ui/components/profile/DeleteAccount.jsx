import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../../components/common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const DeleteAccount = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const navigation = useNavigation();

  useEffect(() => {
    if (!loggedIn) {
      navigation.navigate('LogInScreen');
    }
  }, [loggedIn, navigation]);

  const handleAccountDeletion = () => {
    console.log('Account Deleted');
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