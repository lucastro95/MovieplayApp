import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MovieCard from "../common/MovieCard"
import LargeMovieCard from '../home/LargeMovieCard';

const MovieList = ({ movies, onEndReached }) => {

    const modifiedMovies = [
        movies[0],
        { id: 'empty', empty: true },
        ...movies.slice(1)
    ];

    const navigation = useNavigation();

    const handleMovie = (id) => {
        navigation.navigate('MovieScreen', { id });
    }

    const renderItem = ({ item, index }) => {
        if (index === 0) {
            return (
                <LargeMovieCard title={item.title} imageUri={item.image} />
            );
        } else {
            return (
                <Pressable onPress={() => handleMovie(item.id)}>
            <MovieCard title={item.title} imageUri={item.image} />
                </Pressable>
    )
        }
    };


    return (
        <View style={styles.layout}>
            <FlatList
                data={modifiedMovies}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                onEndReached={onEndReached}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 2,
    },
})


export default MovieList

