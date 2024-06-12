import { StyleSheet, View, Text, Keyboard } from "react-native"
import { colors } from "../styles/RootColors"
import SearchBar from "../components/search/SearchBar"
import SearchSort from "../components/search/SearchSort"
import MovieList from "../components/common/MovieList"
import { useEffect, useRef, useState } from "react"
import moviesWS from "../../networking/api/endpoints/moviesWS"
import I18n from "../../assets/strings/l18n"
import Loading from "../components/common/Loading"

const Search = () => {
  const [input, setInput] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const language = I18n.locale
  const flatListRef = useRef(null);

  const fetchMovies = async (resetPage = false) => {
    try {
      Keyboard.dismiss();
      setLoading(true);
      const newPage = resetPage ? 1 : page;
      const response = await moviesWS.getMovies({ language, input, page: newPage });
      setMovies(prevMovies => resetPage ? response : [...prevMovies, ...response]);
      setPage(newPage + 1);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEndReached = () => {
    if (!loading) {
      fetchMovies();
    }
  };
  
  return (
    <View style={styles.container}>
      {loading && <Loading />}
      <SearchBar input={input} setInput={setInput} fetchMovies={fetchMovies}/>
      <SearchSort />
      <Text style = {styles.text}>Ordered by</Text>
      <MovieList movies={movies} onEndReached={handleEndReached} />
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