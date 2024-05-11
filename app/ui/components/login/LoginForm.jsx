import { StyleSheet, Text, View, TouchableHighlight } from "react-native"
import { colors } from "../../styles/RootColors"
import Icon from 'react-native-vector-icons/Fontisto';
import I18n from "../../../assets/strings/l18n"
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {

  const navigation = useNavigation()

  const handleLogin = () => {
    navigation.push('TabBarStack')
  }

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