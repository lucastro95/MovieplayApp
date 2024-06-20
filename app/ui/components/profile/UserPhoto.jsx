import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../../styles/RootColors'
import { Image, View } from 'react-native-animatable'
import Icon from 'react-native-vector-icons/FontAwesome5'
import placeholder from "../../../assets/images/placeholder_user.png"
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux'
import { editImage } from '../../../redux/slices/UserSlice'

const UserPhoto = ({ user, setPendingUpdate }) => {
    const dispatch = useDispatch();

    const getImageSource = () => {
        return user.photo ? { uri: user.photo } : placeholder;
    };

    const addImage = () => {
        launchImageLibrary(options, response => {    
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.errorCode) {
            console.log('ImagePicker Error: ', response.errorCode);
          } else {
            const asset = response.assets[0];
            const photo = `data:image/jpeg;base64,${asset.base64}`;
            dispatch(editImage(photo))
            setPendingUpdate(true);
          }
        });
      }
    
      const options = {
        title: 'Agregar Foto',
        storageOptions: {
          skipBakup: true,
          path: 'images'
        },
        includeBase64: true
      }
    
    return (
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={getImageSource()} />
            <TouchableOpacity onPress={addImage}>
                <Icon style={styles.addImage} name='plus-circle' color={colors.pink} size={50} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        marginTop: 70,
        width: '60%',
        aspectRatio: 1,
        borderRadius: 999,
    },
    image: {
        borderColor: colors.pink,
        borderWidth: 10,
        borderRadius: 999,
        aspectRatio: 1,
        flex: 1
    },
    addImage: {
        position: 'absolute',
        bottom: 0,
        right: 20,
        backgroundColor: `${colors.black}`,
        borderRadius: 50
    },
})

export default UserPhoto