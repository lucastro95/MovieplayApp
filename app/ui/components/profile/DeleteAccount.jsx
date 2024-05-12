import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../../components/common/Button';

const DeleteAccount = () => {
  const handleAccountDeletion = () => {
    console.log('Account Deleted');
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
     alignItems: 'center',
  },
});

export default DeleteAccount;