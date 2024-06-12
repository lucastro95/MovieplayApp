import { FlatList, View, StyleSheet } from 'react-native'
import MovieCard from "../common/MovieCard"

const MovieList = ({ movies, onEndReached }) => {
    const renderItem = ({ item }) => (
        <MovieCard title={item.title} imageUri={item.image} />
    );

    return (
        <View style={styles.layout}>
            <FlatList
                data={movies}
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

