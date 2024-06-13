import { FlatList, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import icon0 from '../../../assets/images/icon0.png'
import icon1 from '../../../assets/images/icon1.png'
import icon2 from '../../../assets/images/icon2.png'
import icon3 from '../../../assets/images/icon3.png'
import icon4 from '../../../assets/images/icon4.png'
import { colors } from "../../styles/RootColors"
import { Text } from 'react-native-animatable';
import Button from '../common/Button';
import I18n from '../../../assets/strings/l18n';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editImage } from '../../../redux/slices/UserSlice'
import usersWS from '../../../networking/api/endpoints/usersWS'




const ImageGallery = ({onClose}) => {

    const dispatch = useDispatch()
    const [selectedImage, setSelectedImage] = useState(null);
    const user = useSelector((state) => state.user);
    const [pendingUpdate, setPendingUpdate] = useState(false);

    const profilePictures = [
        {name: 'icon0.png', source: icon0, uri: null},
        {name: 'icon1.png', source: icon1, uri: Image.resolveAssetSource(icon1).uri},
        {name: 'icon2.png', source: icon2, uri: Image.resolveAssetSource(icon2).uri},
        {name: 'icon3.png', source: icon3, uri: Image.resolveAssetSource(icon3).uri},
        {name: 'icon4.png', source: icon4, uri: Image.resolveAssetSource(icon4).uri},
    ];
    
    const renderItem = ({item}) => (
        <TouchableOpacity style = {styles.item} onPress = {() => handleImageSelection(item)} >
            <Image source = {item.source} style = {styles.image} />
        </TouchableOpacity>
    )

    const handleImageSelection = (item) => {
        setSelectedImage(item);
    };

    const handleCancellation = () => {
        onClose();
    }

    const handleImageSave = async () => {
        try {
            if (selectedImage !== null) {
                await dispatch(editImage(selectedImage.uri));
                setPendingUpdate(true);
                onClose();

            } else {
                Alert.alert(
                    'Error',
                    'No seleccionaste una imagen',
                    [{ text: 'OK'}],
                )
            }
        } catch (error){
            console.error(error)
        }

        
    };

    const updatePicture = async () => {
        try {
            const response = await usersWS.editUser(user);
            setPendingUpdate(false);
          } catch (error) {
            console.log(error);
          }

    }

    useEffect(() => {
        if (pendingUpdate) {
            updatePicture();
        }
      }, [pendingUpdate]);

    return (
        <View style = {styles.overlay}>
                <View style={styles.layout}>
                    <Text> ELEGITE LA FOTO</Text>
                    <FlatList
                        data={profilePictures}
                        renderItem={renderItem}
                        numColumns={2}
                    />
                    <View style = {styles.buttons}>
                        <Button text = {I18n.t('profile.changeImageNo') } action={handleCancellation}/>
                        <Button text = {I18n.t('profile.changeImageYes')} action={handleImageSave} />
                    </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        maxHeight: '70%',
    },

    layout: {
        borderRadius: 10,
        padding: '5%',
        width: '90%',
        height: '60%',
        alignSelf: 'center', 
        alignItems: 'center',
        backgroundColor: `${colors.white}`
    },
    item: {
        width: '45%',
        aspectRatio: 1, 
        margin: 5,
    },

    image: {
        width: '100%',
        height: '100%',
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
})


export default ImageGallery