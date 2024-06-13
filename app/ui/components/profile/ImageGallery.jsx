import { FlatList, View, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import icon1 from '../../../assets/images/icon1.png'
import icon2 from '../../../assets/images/icon2.png'
import icon3 from '../../../assets/images/icon3.png'
import { colors } from "../../styles/RootColors"
import { Text } from 'react-native-animatable';
import Button from '../common/Button';
import I18n from '../../../assets/strings/l18n';
import { useState } from 'react'


const ImageGallery = ({onClose}) => {
    const [selectedImageName, setSelectedImageName] = useState(null);

    const profilePictures = [
        {name: 'icon1', source: icon1},
        {name: 'icon2', source: icon2},
        {name: 'icon3', source: icon3},


    ];
    
    const renderItem = ({item}) => (
        <TouchableOpacity style = {styles.item} onPress = {() => handleImageSelection(item)} >
            <Image source = {item.source} style = {styles.image} />
        </TouchableOpacity>
    )

    const handleImageSelection = (item) => {
        setSelectedImageName(item.name);
    };

    const handleImageSave = () => {
        onClose();
        
    };

    const handleCancellation = () => {
        onClose();
    }

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