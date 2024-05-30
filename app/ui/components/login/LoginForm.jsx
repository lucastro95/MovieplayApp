import { StyleSheet, Text, View, TouchableHighlight, Alert } from "react-native"
import { colors } from "../../styles/RootColors"
import Icon from 'react-native-vector-icons/Fontisto';
import I18n from "../../../assets/strings/l18n"
import { useNavigation } from "@react-navigation/native";
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useEffect } from "react";

const LoginForm = () => {

  const navigation = useNavigation()

  useEffect(() => {
    GoogleSignin.configure({
      androidClientId: '384932721096-qridf4h29h4il294g6rgguo0c6ueb3m6.apps.googleusercontent.com',
    });
  }, []);


  const handleLogin = async () => {
    try {
      console.log("algo");
      await GoogleSignin.hasPlayServices();
      console.log("algo 2");
      const userInfo = await GoogleSignin.signIn();
      console.log("algo 3");
      console.log({ userInfo, error: undefined });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>{I18n.t('signIn.sign')}</Text>
        <TouchableHighlight
          style={styles.googlebtn}
          underlayColor={colors.black}
          onPress={handleLogin}>
          <Icon
            name='google'
            color={colors.blue}
            size={40}
          />
        </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  form: {
    width: '85%',
    height: '25%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${colors.blue}`
  },
  text: {
    fontFamily: 'Roboto',
    color: `${colors.white}`,
    fontSize: 25
  },
  googlebtn: {
    padding: 15,
    margin: 30,
    borderRadius: 50,
    backgroundColor: `${colors.pink}`
  }
})

export default LoginForm