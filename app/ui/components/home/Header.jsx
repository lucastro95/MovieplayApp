import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../styles/RootColors';
import Logo from '../../../assets/images/logo.png'

const Header = () => {
  return (
    <View style={styles.container}>
      <LinearGradient 
        locations={[0, 1]}
        colors={[colors.blue, `${colors.blue}00`]}
        style={styles.linearGradient}>
        <Image source={Logo} style={styles.logo}/>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '30%', 
    justifyContent: 'center', 
  },
  linearGradient: {
    flex: 1, 
    justifyContent: 'center', 
    paddingHorizontal: 20, 
  },
  logo: {
    width: '100%', 
    resizeMode: 'contain'
  }
});

export default Header;
