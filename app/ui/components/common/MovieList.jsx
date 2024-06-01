import { FlatList, View, StyleSheet } from 'react-native'
import MovieCard from "../common/MovieCard"

const MovieList = () => {
    const listaPelis = [
        {movieTitle: 'Aladdín', imageUri: 'https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-15.jpg'},
        {movieTitle: 'Star Wars: The Force Awakens', imageUri: 'https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-14.jpg'},
        {movieTitle: 'Sinsajo: Parte 1', imageUri: 'https://th.bing.com/th/id/R.43ec15d6109e9f21cc6293fb6fd16ba8?rik=px3eIOgDgYVLfg&pid=ImgRaw&r=0'},
        {movieTitle: 'Frozen 2', imageUri: 'https://i0.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2019/11/jnFCk7qGGWop2DgfnJXeKLZFuBq-scaled.jpg?fit=1707%2C2560&ssl=1'},
        {movieTitle: 'Cruella', imageUri: 'https://es.web.img3.acsta.net/pictures/21/04/21/11/08/5393301.jpg'},
    
    ];

    const renderItem =({item}) => (
        <MovieCard title = {item.movieTitle} imageUri = {item.imageUri} />
        
    );  

    return (
        <View style = {styles.layout}>
            <FlatList
                data={listaPelis}
                renderItem = {renderItem}
                numColumns={2}
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

