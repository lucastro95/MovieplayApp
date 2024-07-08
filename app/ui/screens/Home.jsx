import { StyleSheet, View } from "react-native";
import Header from "../components/home/Header";
import { colors } from "../styles/RootColors";
import MovieList from "../components/common/MovieList";
import { useEffect, useState } from "react";
import moviesWS from "../../networking/api/endpoints/moviesWS";
import Loading from "../components/common/Loading";
import I18n from "../../assets/strings/l18n";
import ErrorModal from "../components/common/ErrorModal";
import Generos from '../../ui/components/home/Generos.json'

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [noConnection, setNoConnection] = useState(false);
  const [page, setPage] = useState(1)
  const [genre, setGenre] = useState(null)
  const language = I18n.locale;

  useEffect(() => {
    fetchMovies(true);
  }, [genre]); 

  const fetchMovies = async (resetPage = false) => {
    try {
      setLoading(true);
      if (resetPage) setMovies([]);
      const newPage = resetPage ? 1 : page;
      const response = await moviesWS.getMovies({ language, page: newPage, genre });
      setMovies(prevMovies => resetPage ? response : [...prevMovies, ...response]);
      console.log(movies);
      setPage(newPage + 1);
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

  const handleEndReached = () => {
    if (!loading) {
      fetchMovies();
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
      {loading ? <Loading /> : movies && (
        <>
          <Header genres={Generos} setGenre={setGenre}/>
          <MovieList movies={movies} onEndReached={handleEndReached} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
    backgroundColor: `${colors.black}`
  },
});

export default Home;
