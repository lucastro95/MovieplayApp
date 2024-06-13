import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity, Modal } from "react-native"
import { colors } from "../styles/RootColors"
import LogOut from "../components/profile/LogOut"
import DeleteAccount from "../components/profile/DeleteAccount"
import EditField from "../components/profile/EditField"
import { useSelector } from "react-redux"
import placeholder from "../../assets/images/placeholder_user.png"
import { useState } from "react"
import ImageGallery from "../components/profile/ImageGallery"

const Profile = () => {

    const user = useSelector((state) => state.user);

    const [isImageGalleryVisible, setImageGalleryVisible] = useState(false);


    const openImageGallery = () => {
      setImageGalleryVisible(true);
  };

  const closeImageGallery = () => {
      setImageGalleryVisible(false);
  };

    return (
        <View style={styles.container}>
          <TouchableOpacity style = {styles.imageContainer} onPress={openImageGallery}>
              <Image style={styles.image} source={user.photo ? { uri: `${user.photo}` } : placeholder} /> 
          </TouchableOpacity>
          <View style = {styles.infoBox1} >
            <Text style = {styles.usernameText} numberOfLines={1}>{user.nickName}</Text>
            <EditField iconName={'edit'} size = {Dimensions.get('window').height * 0.03}/>
          </View>
          <View style = {styles.infoBox2}>
            <Text style = {styles.namesText} numberOfLines={1}>{user.givenName} {user.familyName} </Text>
            <EditField iconName={'edit'} size = {Dimensions.get('window').height * 0.03}/>
          </View>
          <View style = {styles.buttonContainer}>
            <LogOut/>
            <DeleteAccount/>
          </View>
          <Modal 
              animationType="slide"
              transparent={true}
              visible={isImageGalleryVisible}
              onRequestClose={closeImageGallery}
          >
            <ImageGallery onClose = {closeImageGallery}/>

          </Modal>
        </View>

  )
}

const styles = StyleSheet.create({
        container: {
          flex: 1, 
          minHeight: '100%',
          backgroundColor: `${colors.black}`,
          alignItems: 'center',
        },
        
        infoBox1: {
          marginTop: 10,
          alignItems: 'center',
          justifyContent: 'center',
          width: '95%',
          height: Dimensions.get('window').height * 0.06,
          flexDirection: 'row',
        },

        infoBox2: {
          marginTop: 10,
          alignItems: 'center',
          justifyContent: 'center',
          width: '95%',
          height: Dimensions.get('window').height * 0.05,
          flexDirection: 'row',
          
        },
        usernameText: {
          fontSize: 30,
          fontFamily: "Roboto",
          color: `${colors.white}`,
          paddingHorizontal: '5%',
        },

        editButton: {
          position: 'absolute',
          bottom: 0,
          right: 0,
        },

        namesText: {
          fontSize: 20,
          fontFamily: "Roboto",
          paddingHorizontal: '5%',
          color: `${colors.white}`
        },


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

        buttonContainer: {
          marginTop: '5%',
          flex: 1,
          flexDirection: 'center',
          alignItems: 'center',
          width: '100%',
        }
})

export default Profile