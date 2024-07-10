import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { colors } from "../../styles/RootColors"
const {width} = Dimensions.get('window');
import placeholder from "../../../assets/images/placeholder_movie.png"
import Icon from 'react-native-vector-icons/FontAwesome5'


const FavouriteCard = ({title, imageUri, iconName}) => {
  
    const handleFavourites = () => {
      if (!loading) {
        fetchMovies();
      }
    };

    return (
      <View style = {styles.card}>

        {imageUri === "https://image.tmdb.org/t/p/originalnull" ?
          
          <Image style = {styles.image} source = {placeholder} />
         :
          <Image style = {styles.image} source = {{uri: imageUri}} />
         }
        <Text style = {styles.title} numberOfLines={1}> {title} </Text>
        <Icon name={"minus-circle"} style={styles.icon} size = {35} onPress={handleFavourites}></Icon>

      </View>
    )
  }

const styles = StyleSheet.create({
    card: {
      paddingHorizontal: '5%',

    },

    icon:{
      position: 'absolute',
      color: colors.pink,
      top: 0,
      right: 10,

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
