import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import { colors } from '../../styles/RootColors'

const Button = ({ text, action }) => {
  return (
    <TouchableHighlight style={styles.button} onPress={action}>
        <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create ({
    button: {
        padding: 15,
        paddingHorizontal: 30,
        backgroundColor: colors.pink,
        borderRadius: 50,
        marginVertical: 10
    },

    text: {
        color: colors.white,
        fontFamily: "Roboto",
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
      },
})

export default Button