import React from 'react'
import RoundButtonIcon from '../../components/common/RoundButtonIcon'
import { View } from 'react-native';


const EditField = ( {iconName, size, handleEditField, name, setFieldToEdit }) => {
    const handleFieldChange = () => {
        handleEditField()
        setFieldToEdit(name)
    };

    return (
        <View>
            <RoundButtonIcon iconName={iconName} action={handleFieldChange} size={size}/>
        </View>
    )
}


export default EditField