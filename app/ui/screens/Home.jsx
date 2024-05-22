import { StyleSheet, View } from "react-native"
import Header from "../components/home/Header"
import { colors } from "../styles/RootColors"
import MovieList from "../components/common/MovieList"
import { SafeAreaView } from "react-native-safe-area-context"



const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <MovieList 
        onScroll = {Animated.event(
          [{nativeEvent: { contentOffset: {y: scrollY}}}],
          {useNativeDriver: false}
        )}
      />
    </SafeAreaView>
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