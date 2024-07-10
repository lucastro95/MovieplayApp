import { StyleSheet, View, Text } from "react-native";
import { colors } from "../styles/RootColors";
import { useState, useEffect } from "react";
import I18n from "../../assets/strings/l18n";
import ErrorModal from "../components/common/ErrorModal";
import FavouriteList from "../components/favourites/FavouriteList";
import usersWS from "../../networking/api/endpoints/usersWS";
import FavouriteHeader from "../components/favourites/FavouriteHeader";


const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [noConnection, setNoConnection] = useState(false);
  const [page, setPage] = useState(1)
  const language = I18n.locale;

  useEffect(() => {
    fetchFavourites(true);
  }, []);

  const fetchFavourites = async (resetPage = false) => {
    try {
      setLoading(true);
      if (resetPage) setFavourites([]);
      const newPage = resetPage ? 1 : page;
      const response = await usersWS.getFavourites({ language, page: newPage, genre });
      setFavourites(prevFavourites => resetPage ? response : [...prevFavourites, ...response]);
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
      <FavouriteHeader/>
      <FavouriteList movies={favourites} onEndReached={handleEndReached}></FavouriteList>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
    backgroundColor: `${colors.black}`
  },
});

export default Favourites