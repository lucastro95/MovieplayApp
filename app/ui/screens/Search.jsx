import { StyleSheet, View, Text } from "react-native"
import { colors } from "../styles/RootColors"
import SearchBar from "../components/search/SearchBar"
import SearchSort from "../components/search/SearchSort"
import MovieList from "../components/common/MovieList"
import { useEffect, useState } from "react"
import moviesWS from "../../networking/api/endpoints/moviesWS"
import I18n from "../../assets/strings/l18n"

const Search = () => {
  const [input, setInput] = useState('')
  const language = I18n.locale

  const fetchMovies = async () => {
    try {
      const response = await moviesWS.getMovies({ language });
      console.log("Respuesta", response);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <View style={styles.container}>
      <SearchBar input={input} setInput={setInput} fetchMovies={fetchMovies}/>
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