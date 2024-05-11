import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { colors } from "../../styles/RootColors"
const {width} = Dimensions.get('window');

const COLUMN_WIDTH = width / 2;

const MovieCard = () => {
  return (
    <View style = {styles.card}>
      <Image style = {styles.image} source = {{uri: 'https://lumiere-a.akamaihd.net/v1/images/good-dinosaur-the-spain-apple-itunes-movie-cover_be0f2dde.jpeg?region=0,0,2000,3000'}} />
      <Text style = {styles.title} numberOfLines={1}> El viaje de Arlo </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
      marginBottom: 20,
      width: COLUMN_WIDTH, 
      paddingVertical: '4%',
      paddingHorizontal: '4%',
    },

    image: {
      width: '100%',
      height: 300,
      
    },
    title: {
      paddingTop: 5,
      paddingBottom: 5,
      textAlign: 'center',
      fontSize: 14,
      color: colors.white,
      fontWeight: 'bold',
      maxHeight: '10%',
      height: '10%',
    },

  });

  export default MovieCard;
