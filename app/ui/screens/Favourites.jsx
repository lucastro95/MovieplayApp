import { StyleSheet, View, Text } from "react-native";
import { colors } from "../styles/RootColors";
import { useState, useEffect } from "react";
import I18n from "../../assets/strings/l18n";
import ErrorModal from "../components/common/ErrorModal";
import FavouriteList from "../components/favourites/FavouriteList";
import usersWS from "../../networking/api/endpoints/usersWS";
import FavouriteHeader from "../components/favourites/FavouriteHeader";
import { useSelector } from "react-redux";
import Loading from "../components/common/Loading";

const Favourites = () => {
  const user = useSelector(state => state.user.id);

  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [noConnection, setNoConnection] = useState(false);

  useEffect(() => {
    fetchFavourites();
  }, []);

  const fetchFavourites = async () => {
    try {
      setLoading(true);
      const response = await usersWS.getFavourites(user);
      setFavourites(response);
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
    <>
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <ErrorModal
            visible={errorVisible}
            noconnection={noConnection}
            onClose={handleCloseErrorModal}
          />
          <FavouriteHeader />
          {favourites.length > 0 ? (
            <FavouriteList favourites={favourites} setNoConnection={setNoConnection} setErrorVisible={setErrorVisible} fetchFavourites={fetchFavourites}/>
          ) : (
            <Text style={styles.errorText}>
              {I18n.t('favourite.noFavourites')}
            </Text>
          )}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
    backgroundColor: `${colors.black}`
  },
  errorText: {
    fontSize: 20,
    color: `${colors.white}`,
    marginTop: 200,
    textAlign: 'center'
  }
});

export default Favourites;
