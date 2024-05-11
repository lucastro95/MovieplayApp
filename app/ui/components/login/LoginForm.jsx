import { StyleSheet, Text, View } from "react-native"
import { colors } from "../../styles/RootColors"
import Icon from 'react-native-vector-icons/Fontisto';
import I18n from "../../../assets/strings/l18n"

const LoginForm = () => {
  return (
    <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.text}>{I18n.t('signIn.sign')}</Text>
          <View style={styles.googlebtn}>
            <Icon
              name='google'
              color={colors.blue}
              size={50}
              />
          </View>
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
      width: '80%',
      height: '40%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: `${colors.blue}`
    },
    text: {
      fontFamily: 'Roboto',
      color: `${colors.white}`,
      fontSize: 20
    },
    googlebtn: {
      padding: 15,
      borderRadius: 50,
      backgroundColor: `${colors.pink}`
    }
})

export default LoginForm