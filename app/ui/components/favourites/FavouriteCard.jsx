import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { colors } from "../../styles/RootColors"
const { width } = Dimensions.get('window');
import placeholder from "../../../assets/images/placeholder_movie.png"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useSelector } from 'react-redux';

const COLUMN_WIDTH = width / 2;

const FavouriteCard = ({ movie, setNoConnection, setErrorVisible, fetchFavourites }) => {
  const user = useSelector(state => state.user.id);

  const handleFavourites = async () => {
    try {
      await usersWS.deleteFavourite(user, movie.id)
    } catch (error) {
      console.log(error);
      setErrorVisible(true);
      if (error.message.includes("Network Error")) {
        setNoConnection(true);
      } else {
        setNoConnection(false);
      }
    }
    fetchFavourites();
  };

  return (
    <View style={styles.card}>

      {movie.img === "https://image.tmdb.org/t/p/originalnull" ?

        <Image style={styles.image} source={placeholder} />
        :
        <Image style={styles.image} source={{ uri: movie.img }} />
      }
      <Text style={styles.title} numberOfLines={1}> {movie.title} </Text>
      <Icon name={"minus-circle"} style={styles.icon} size={35} onPress={handleFavourites}></Icon>

    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: COLUMN_WIDTH,
    paddingHorizontal: '5%',
  },

  icon: {
    position: 'absolute',
    color: colors.pink,
    top: 0,
    right: 0,
    backgroundColor: colors.black,
    borderRadius: 50
  },

  image: {
    marginTop: '10%',
    width: '100%',
    height: 270,
  },

  title: {
    paddingTop: 10,
    paddingBottom: 20,
    textAlign: 'center',
    fontSize: 14,
    color: colors.white,
    fontWeight: 'bold',

  },

});

export default FavouriteCard;
