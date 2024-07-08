import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import placeholder from '../../../assets/images/placeholder_user.png'
import { colors } from '../../styles/RootColors'

const Card = () => {
  return (
    <View style={styles.container}>
        <Image 
            style={styles.image}
            source={placeholder}
        />
        <Text style={styles.name}>Nombre Apellido</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 130,
        margin: 10
    },
    image: {
        width: 130,
        height: 180,
    },
    name: {
        color: `${colors.white}`,
        fontSize: 20
    }
})

export default Card