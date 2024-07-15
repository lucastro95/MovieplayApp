import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import FavouriteCard from './FavouriteCard';

const FavouriteList = ({ favourites, setNoConnection, setErrorVisible, fetchFavourites }) => {
    const navigation = useNavigation();

    const handleMovie = (id) => {
        navigation.navigate('MovieScreen', { id });
    }

    const renderItem = ({ item }) => {
         return (
            <Pressable onPress={() => handleMovie(item.id)}>
                <FavouriteCard movie={item} setNoConnection={setNoConnection} setErrorVisible={setErrorVisible} fetchFavourites={fetchFavourites}/>
            </Pressable>
    )
        }

    return (
        <View style={styles.layout}>
            <FlatList
                data={favourites}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    layout: {
        flex: 2,
    },
})

export default FavouriteList