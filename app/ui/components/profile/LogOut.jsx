import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../../components/common/Button';
import { useNavigation } from '@react-navigation/native';
import Routes from '../../../navigation/Routes';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/slices/UserSlice';

const LogOut = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logOut())
        navigation.navigate(Routes.LoginStack);
    };

  return (
    <View style={styles.container}>
      <Button text="Log Out" action={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '60%'
  },

});

export default LogOut;