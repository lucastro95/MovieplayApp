import { StyleSheet, View, Text, Keyboard } from "react-native";
import { colors } from "../styles/RootColors";
import SearchBar from "../components/search/SearchBar";
import SearchSort from "../components/search/SearchSort";
import { useEffect, useState } from "react";
import moviesWS from "../../networking/api/endpoints/moviesWS";
import I18n from "../../assets/strings/l18n";
import Loading from "../components/common/Loading";
import ErrorModal from "../components/common/ErrorModal";
import NormalMovieList from "../components/common/NormalMovieList";

const Search = () => {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(null);
  const [release, setRelease] = useState(null);
  const [errorVisible, setErrorVisible] = useState(false);
  const [noConnection, setNoConnection] = useState(false);
  const language = I18n.locale;

  useEffect(() => {
    if (input) {
      fetchMovies();
    }
  }, [rating, release]);

  const fetchMovies = async () => {
    try {
      Keyboard.dismiss();
      setLoading(true);
      let response;
      if (!release && !rating) {
        response = await moviesWS.getMovies({ language, input });
      } else {
        response = await moviesWS.getMovies({ language, input, release, rating });
      }
      setMovies(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrorVisible(true);
      if (error.message.includes("Network Error")) {
        setNoConnection(true);
      } else {
        setNoConnection(false);
      }
    }
  };

  const handleCloseErrorModal = () => {
    setErrorVisible(false);
    setNoConnection(false);
  };

  return (
    <View style={styles.container}>
      <ErrorModal
        visible={errorVisible}
        noconnection={noConnection}
        onClose={handleCloseErrorModal}
      />
      {loading && <Loading />}
      <SearchBar input={input} setInput={setInput} fetchMovies={fetchMovies} />

      {movies === null ? null :
        movies.length === 0 ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{I18n.t('search.error')}</Text>
          </View>
        ) : (
          <>
            <SearchSort rating={rating} setRating={setRating} release={release} setRelease={setRelease} fetchMovies={fetchMovies} />
            <NormalMovieList movies={movies} onEndReached={() => { }} />
          </>
        )}
    </View>
  );
};

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
  },

  errorContainer: {
    width: '100%',
    height: '50%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  errorText: {
    color: `${colors.white}`,
    fontSize: 20
  }
});

export default Search;
