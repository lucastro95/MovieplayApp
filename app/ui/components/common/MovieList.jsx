import { FlatList, View, StyleSheet } from 'react-native'
import MovieCard from "../common/MovieCard"
import LargeMovieCard from '../home/LargeMovieCard';

const MovieList = ({ movies, onEndReached }) => {

    const modifiedMovies = [
        movies[0],
        { id: 'empty', empty: true },
        ...movies.slice(1)
    ];

    const renderItem = ({ item, index }) => {
        if (index === 0) {
            return (
                <LargeMovieCard title={item.title} imageUri={item.image} />
            );
        } else {
            return (
                <MovieCard title={item.title} imageUri={item.image} />
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
    }
})


export default MovieList

