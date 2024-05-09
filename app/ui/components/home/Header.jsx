import { Image, StyleSheet, Text, View } from "react-native"
import Logo from '../../../assets/images/logo.svg'
import { colors } from "../../styles/RootColors"

const Header = () => {
  return (
    <View styles={styles.container}>
      <Image source={Logo} style={styles.logo}/>
      <Text>Hola</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 700,
        flex: 1,
        justifyContent: "center",
        background: `linear-gradient(to bottom, ${colors.pink}, rgba(0,0,0,1))`,
    },
    logo: {
      width: 80,
      objectFit: "cover"
    }
})

export default Header