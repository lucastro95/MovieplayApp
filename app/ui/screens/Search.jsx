import { StyleSheet, View, Text } from "react-native"
import { colors } from "../styles/RootColors"
import SearchBar from "../components/search/SearchBar"
import SearchSort from "../components/search/SearchSort"
import MovieList from "../components/common/MovieList"

const Search = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <SearchSort />
      <Text style = {styles.text}>Ordered by</Text>
      <MovieList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${colors.black}`,
  },

  text: {
    color: colors.white,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
  }
})

export default Search