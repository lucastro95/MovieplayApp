import { StyleSheet, View } from "react-native"
import { colors } from "../styles/RootColors"
import SearchBar from "../components/search/SearchBar"

const Search = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${colors.black}`
  }
})

export default Search