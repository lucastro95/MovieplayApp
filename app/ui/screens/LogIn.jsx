import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/RootColors';
import LoginForm from '../components/login/LoginForm';
import I18n from '../../assets/strings/l18n';
import moviesWS from '../../networking/api/endpoints/moviesWS';
import axios from 'axios';

const LogIn = () => {
  const [bgImg, setBgImg] = useState([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchImg = async () => {
      try {
        const response = await moviesWS.signIn();
        const images = response.map(movie => movie.image);
        setBgImg(images);
      } catch (err) {
        console.error(err);
      }
    };

    fetchImg();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % bgImg.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [bgImg]);

  if (bgImg.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: bgImg[currentImageIndex] }}
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
