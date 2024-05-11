import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/RootColors';
import LoginForm from '../components/login/LoginForm';

const LogIn = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://image.tmdb.org/t/p/original/fIUqk6Pjo3uf5RiOGT19KQ53ekq.jpg' }}
        resizeMode="cover"
        style={styles.background}>
        <View style={styles.overlay} />
        <LoginForm />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute', 
    top: 0,
    left: 0,
    backgroundColor: `${colors.pink}66`, 
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default LogIn;
