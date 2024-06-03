import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../../components/common/Button';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logOut } from '../../../redux/slices/UserSlice';


const LogOut = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const navigation = useNavigation();

  useEffect(() => {
    if (!loggedIn) {
      navigation.navigate('LogInScreen');
    }
  }, [loggedIn, navigation]);

  const handleLogout = () => {
      dispatch(logOut());
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