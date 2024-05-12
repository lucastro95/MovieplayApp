import React from 'react'
import RoundButtonIcon from '../../components/common/RoundButtonIcon'
import { View, StyleSheet, Dimensions, Text } from 'react-native';


const EditField = ( {iconName, size }) => {
    const handleFieldChange = () => {
        console.log('Change Profile');
      };

    return (
        <View>
            <RoundButtonIcon iconName={iconName} action={handleFieldChange} size={size}/>
        </View>
    )
}


export default EditField