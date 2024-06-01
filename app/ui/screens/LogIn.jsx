import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/RootColors';
import LoginForm from '../components/login/LoginForm';
import I18n from '../../assets/strings/l18n';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';


const LogIn = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://image.tmdb.org/t/p/original/fIUqk6Pjo3uf5RiOGT19KQ53ekq.jpg' }}
        resizeMode="cover"
        style={styles.background}>
        <View style={styles.overlay} />
        <LoginForm />
        <View style={styles.terms}>
          <Text style={styles.termsText}>{I18n.t('signIn.terms')}</Text>
        </View>
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
  terms: {
    width: '100%',
    height: '10%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    left:0,
    backgroundColor: `${colors.black}`
  },
  termsText: {
    fontSize: 15,
    color: `${colors.white}`
  }
});

export default LogIn;
