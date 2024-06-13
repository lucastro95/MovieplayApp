import { StyleSheet, View } from "react-native";
import Header from "../components/home/Header";
import { colors } from "../styles/RootColors";
import MovieList from "../components/common/MovieList";
import { useEffect, useState } from "react";
import moviesWS from "../../networking/api/endpoints/moviesWS";
import Loading from "../components/common/Loading";
import I18n from "../../assets/strings/l18n";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const language = I18n.locale;
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchMovies();
  }, []); 

  const fetchMovies = async (resetPage = false) => {
    try {
      setLoading(true);
      const newPage = resetPage ? 1 : page;
      const response = await moviesWS.getMovies({ language, page: newPage });
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
      <Header />
      <MovieList movies={movies} onEndReached={handleEndReached} />
    </View>
  );
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
});

export default Home;
