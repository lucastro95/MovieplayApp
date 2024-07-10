import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../common/Button'
import I18n from '../../../assets/strings/l18n'
import Fav from 'react-native-vector-icons/MaterialCommunityIcons';
import Star from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../styles/RootColors';
import ModalRate from './ModalRate';
import Trailer from './Trailer';
import usersWS from '../../../networking/api/endpoints/usersWS';

const Actions = ({ movie, user }) => {
    const [favorite, setFavorite] = useState(movie.favorite)
    const [modal, setModal] = useState(false)
    const [trailer, setTrailer] = useState(false)

    const handleFavorite = async () => {
        try {
            if(favorite) {
                await usersWS.deleteFavourite(user, movie.id)
            } else {
                await usersWS.addFavourite(user, movie.id)
            }
        } catch (error) {
            console.log(error);
        }
        setFavorite(!favorite)
    }

    const handleCloseModal = () => {
        setModal(false)
    }

    const handleRate = () => {
        setModal(true)
    }

    const handleCloseTrailer = () => {
        setTrailer(false)
    }

    return (
        <View>
            <Trailer 
                visible={trailer}
                onClose={handleCloseTrailer}
                movie={movie}/>
            <View style={styles.row}>
                <View style={styles.watch}>
                    <Button text={I18n.t('movie.watch')} action={() => {setTrailer(true)}} />
                </View>
                <View style={styles.fav}>
                    <Fav 
                        name="bookmark" 
                        color={favorite ? colors.pink : colors.white} 
                        size={50}
                        onPress={handleFavorite}
                        />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.rating}>
                    <Star name='star' color={colors.pink} size={40}/>
                    <Text style={styles.text}>{movie.movieRating === "NaN" ? `0 (0)`: `${movie.movieRating}`}</Text>
                </View>
                <View style={styles.rate}>
                    <Button text={I18n.t('movie.rate')} action={handleRate} />
                </View>
            </View>
            {modal && <ModalRate visible={modal} onClose={handleCloseModal} user={user}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    fav: {
        width: '40%',
        alignItems: 'center'
    },
    watch: {
        width: '60%',
    },
    rate: {
        width: '40%'
    },
    rating: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    text: {
        color: `${colors.white}`,
        fontSize: 25,
        marginLeft: 10
    }
})

export default Actions