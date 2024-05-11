import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../../components/common/Button';
import { useNavigation } from '@react-navigation/native';
import LogIn from '../../screens/LogIn';

const LogOut = () => {
    const navigation = useNavigation()

    const handleLogout = () => {
        navigation.navigate(LogIn);
    };

  return (
    <View style={styles.container}>
      <Button text="Log Out" action={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default LogOut;