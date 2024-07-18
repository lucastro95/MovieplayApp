import React from 'react'
import { Animated, StyleSheet } from 'react-native'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text } from 'react-native-animatable'
import I18n from '../../../assets/strings/l18n'
import { colors } from '../../styles/RootColors'

const FavouriteHeader = () => {



    return (
        <Animated.View style = {styles.header}>
            <Icon1 name={'bookmark'} color={colors.pink} size={50}/>
            <Text style={styles.title}>{I18n.t('favourite.title')}</Text>
        </Animated.View>
  )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '20%',
    },

    title: {
        fontSize: 22,
        color: colors.white,
        marginLeft: 20
    },
  });

export default FavouriteHeader