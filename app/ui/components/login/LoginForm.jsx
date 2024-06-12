import { StyleSheet, Text, View, TouchableHighlight, Alert } from "react-native"
import { colors } from "../../styles/RootColors"
import Icon from 'react-native-vector-icons/Fontisto';
import I18n from "../../../assets/strings/l18n"
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import { logIn } from "../../../redux/slices/UserSlice";
import loginWS from "../../../networking/api/endpoints/loginWS";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../common/Loading";

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    GoogleSignin.configure({
      androidClientId: '384932721096-qridf4h29h4il294g6rgguo0c6ueb3m6.apps.googleusercontent.com',
    });
  }, []);

  useEffect(() => {
    if (loggedIn) {
      navigation.navigate('TabBarStack');
    }
  }, [loggedIn, navigation]);

  const handleLogin = async () => {
    try {
      setLoading(true)
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const {givenName, familyName, email, photo, id} = userInfo.user;
      const response = await loginWS.postLogin({givenName, familyName, email, photo, id});
      const token = response.token
      dispatch(logIn({givenName, familyName, email, photo, token}));
      AsyncStorage.setItem('userToken', token)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {loading && <Loading />}
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