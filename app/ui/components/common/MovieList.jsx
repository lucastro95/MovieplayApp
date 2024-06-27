import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MovieCard from "../common/MovieCard"

const MovieList = ({ movies, onEndReached }) => {
    const navigation = useNavigation();

    const handleMovie = (id) => {
        navigation.navigate('MovieScreen', { id });
    }

    const renderItem = ({ item }) => (
        <Pressable onPress={() => handleMovie(item.id)}>
            <MovieCard title={item.title} imageUri={item.image} />
        </Pressable>
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
    },
})


export default MovieList

