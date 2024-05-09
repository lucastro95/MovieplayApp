import { StyleSheet, View } from "react-native"
import Header from "../components/home/Header"
import { colors } from "../styles/RootColors"

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    minHeight: '100%',
    backgroundColor: `${colors.black}`
  }
})

export default Home