import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import FavouriteCard from './FavouriteCard';

const FavouriteList = ({ favourites, onEndReached }) => {
    const navigation = useNavigation();

    const handleMovie = (id) => {
        navigation.navigate('MovieScreen', { id });
    }

    const renderItem = ({ item }) => {
         return (
            <Pressable onPress={() => handleMovie(item.id)}>
                <FavouriteCard title={item.title} imageUri={item.image} />
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

export default FavouriteList