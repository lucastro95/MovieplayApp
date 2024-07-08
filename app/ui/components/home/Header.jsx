import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../styles/RootColors';
import Logo from '../../../assets/images/logo.png'
import Genres from './Genres';

const Header = ({ genres, setGenre }) => {
    return (
        <View style={styles.container}>
            <LinearGradient 
              locations={[0, 1]}
              colors={[colors.blue, `${colors.blue}00`]}
              style={styles.linearGradient}>
              <Image source={Logo} style={styles.logo}/>
            </LinearGradient>
            <Genres genres={genres} setGenre={setGenre}/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  },
  linearGradient: {
    flex: 1, 
    justifyContent: 'center',
    alignItems:'center',
    paddingHorizontal: 20
  },
  logo: {
    width: '100%', 
    resizeMode: 'contain'
  }
});

export default Header;
