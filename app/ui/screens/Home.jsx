import { StyleSheet, View } from "react-native"
import Header from "../components/home/Header"
import { colors } from "../styles/RootColors"
import MovieList from "../components/common/MovieList"

const Home = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <MovieList/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    minHeight: '100%',
    backgroundColor: `${colors.black}`
  },

  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Home