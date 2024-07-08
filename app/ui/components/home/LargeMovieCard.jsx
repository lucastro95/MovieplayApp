import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { colors } from "../../styles/RootColors"
const {width} = Dimensions.get('window');
import placeholder from "../../../assets/images/placeholder_movie.png"

const COLUMN_WIDTH = width;

const LargeMovieCard = ({title, imageUri}) => {
    return (
        <View style = {styles.card}>
          {imageUri === "https://image.tmdb.org/t/p/originalnull" ?
            <Image style = {styles.image} source = {placeholder} />
           :
            <Image style = {styles.image} source = {{uri: imageUri}} />
           }
          <Text style = {styles.title} numberOfLines={1}> {title} </Text>
        </View>
      )
    }

const styles = StyleSheet.create({
    card: {
      width: COLUMN_WIDTH,
      paddingHorizontal: '3%',
      justifyContent: 'center',

    },

    image: {
      width: '70%',
      height: 400,
      alignSelf: 'center'

      
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
export default LargeMovieCard