import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MovieCard from "../common/MovieCard"
import LargeMovieCard from '../home/LargeMovieCard';

const MovieList = ({ movies, onEndReached }) => {
    const navigation = useNavigation();

    const modifiedMovies = movies.length > 0 ? [
        movies[0],
        { id: 'empty', empty: true },
        ...movies.slice(1)
    ] : [];

    const handleMovie = (id) => {
        navigation.navigate('MovieScreen', { id });
    }

    const renderItem = ({ item, index }) => {
        if (index === 0) {
            return (
                <Pressable onPress={() => handleMovie(item.id)}>
                    <LargeMovieCard title={item.title} imageUri={item.image} />
                </Pressable>

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