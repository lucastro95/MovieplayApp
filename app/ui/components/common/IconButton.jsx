import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { colors } from '../../styles/RootColors'
import Icon from 'react-native-vector-icons/FontAwesome5'


const IconButton = ({ text, action, iconName }) => {
    return (
        <TouchableHighlight style={styles.button} onPress={action}>
          <View style = {styles.content}>
            <Icon name={iconName} style={styles.icon} size ={30}/>
            <Text style={styles.text}>{text}</Text>
          </View>
        </TouchableHighlight>
      );
    };

const styles = StyleSheet.create ({
    button: {
        backgroundColor: colors.pink,
        borderRadius: 50,
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        minWidth: 150,
        paddingHorizontal: 15
    },

    content: {
        flexDirection: 'row',
  
    },

    icon: {
        color: colors.white,
        alignSelf: 'center',
        paddingHorizontal: 10,
    },

    text: {
        color: colors.white,
        fontFamily: "Roboto",
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingHorizontal: 6,
      },
})

export default IconButton