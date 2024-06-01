import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { colors } from "../../styles/RootColors"
const {width} = Dimensions.get('window');

const COLUMN_WIDTH = width / 2;

const MovieCard = ({title, imageUri}) => {
  return (
    <View style = {styles.card}>
      <Image style = {styles.image} source = {{uri: imageUri}} />
      <Text style = {styles.title} numberOfLines={1}> {title} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
      width: COLUMN_WIDTH, 
      paddingHorizontal: '3%',

    },

    image: {
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

  export default MovieCard;
