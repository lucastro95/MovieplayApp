import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { colors } from '../../styles/RootColors'
import Icon from 'react-native-vector-icons/FontAwesome5'


const RoundButtonIcon = ( {action, iconName, size} ) => {
  return (
    <TouchableHighlight style={styles.button} onPress={action}>
      <View style = {styles.iconContainer}>
        <Icon name = {iconName} color = {colors.pink} size = {size}> </Icon>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create ({
    button: {
        flex: 1,
        borderRadius: 999,
        height: '100%',
        aspectRatio: 1,

      },
      iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        width: '120%',
        height: '100%'
      },
})

export default RoundButtonIcon