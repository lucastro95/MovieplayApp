import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../../styles/RootColors'
import { Image, View } from 'react-native-animatable'
import Icon from 'react-native-vector-icons/FontAwesome5'
import placeholder from "../../../assets/images/placeholder_user.png"
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux'
import { editImage } from '../../../redux/slices/UserSlice'
import axios from 'axios';

const UserPhoto = ({ user, setPendingUpdate }) => {
    const dispatch = useDispatch();
    const YOUR_CLOUD_NAME = 'dq7tfnrso';
    const YOUR_UPLOAD_PRESET = 'd0znkzh9';

    const getImageSource = () => {
        return user.photo ? { uri: user.photo } : placeholder;
    };


    const selectImage = async () => {
      return new Promise((resolve, reject) => {
        launchImageLibrary({mediaType: 'photo'}, (response) => {
          if (response.didCancel) {
            reject('User cancelled image picker');
          } else if (response.error) {
            reject(response.error);
          } else {
            const {uri} = response.assets[0];
            resolve(uri);
          }
        });
      });
    };


    const uploadImageToCloudinary = async (imageUri) => {
      const data = new FormData();
      data.append('file', {
          uri: imageUri,
          type: 'image/jpeg',
          name: 'upload.jpg',
      });
      data.append('upload_preset', YOUR_UPLOAD_PRESET);

      try {
          const response = await axios.post(`https://api.cloudinary.com/v1_1/${YOUR_CLOUD_NAME}/image/upload`, data, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });
          console.log(response);
          return response.data.secure_url;
      } catch (error) {
        console.error('Error al subir la imagen a Cloudinary:', error.response ? error.response.data : error);
        throw error;
      }
  };

    const selectAndUploadImage = async () => {
      try {
         const imageUri = await selectImage();
         const imageUrl = await uploadImageToCloudinary(imageUri);
         dispatch(editImage(imageUrl))
         setPendingUpdate(true)
         
      } catch (error) {
        console.error('Error en el proceso de selección y subida de imagen:', error);
      }
    }
    
    return (
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={getImageSource()} />
            <TouchableOpacity onPress={selectAndUploadImage}>
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