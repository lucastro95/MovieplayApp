import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity, Modal } from "react-native"
import { colors } from "../styles/RootColors"
import LogOut from "../components/profile/LogOut"
import DeleteAccount from "../components/profile/DeleteAccount"
import { useDispatch, useSelector } from "react-redux"
import placeholder from "../../assets/images/placeholder_user.png"
import ImageGallery from "../components/profile/ImageGallery"
import { useEffect, useState } from "react"
import EditPopup from "../components/profile/EditPopup"
import { editName, editNickName } from "../../redux/slices/UserSlice"
import EditField from "../components/profile/EditField"
import usersWS from "../../networking/api/endpoints/usersWS"

const Profile = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [fieldToEdit, setFieldToEdit] = useState(null);
  const user = useSelector((state) => state.user);
  const [pendingUpdate, setPendingUpdate] = useState(false);
  const [isImageGalleryVisible, setImageGalleryVisible] = useState(false);

  const dispatch = useDispatch();

  const openImageGallery = () => {
    setImageGalleryVisible(true);
};

const closeImageGallery = () => {
    setImageGalleryVisible(false);
};

  const handleEditField = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const updateUser = async () => {
    try {
      const response = await usersWS.editUser(user);
      setPendingUpdate(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSave = (givenName, familyName, nickName) => {
    if (fieldToEdit === 'name') {
      dispatch(editName({ givenName, familyName }));
    } else if (fieldToEdit === 'nickname') {
      dispatch(editNickName(nickName));
    }
    setPendingUpdate(true);
  };

  useEffect(() => {
    if (pendingUpdate) {
      updateUser();
    }
  }, [user, pendingUpdate]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={user.photo ? { uri: `${user.photo}` } : placeholder} />
      </View>
      <View style={styles.infoBox1}>
        <Text style={styles.usernameText} numberOfLines={1}>{user.nickName}</Text>
        <EditField iconName={'edit'} size={Dimensions.get('window').height * 0.03} handleEditField={handleEditField} name="nickname" setFieldToEdit={setFieldToEdit} />
      </View>
      <View style={styles.infoBox2}>
        <Text style={styles.namesText} numberOfLines={1}>{user.givenName} {user.familyName} </Text>
        <EditField iconName={'edit'} size={Dimensions.get('window').height * 0.03} handleEditField={handleEditField} name="name" setFieldToEdit={setFieldToEdit} />
      </View>
      <View style={styles.buttonContainer}>
        <LogOut />
        <DeleteAccount />
      </View>
      <EditPopup visible={isPopupVisible} onClose={handleClosePopup} onSave={handleSave} fieldToEdit={fieldToEdit} />
      <Modal 
              animationType="slide"
              transparent={true}
              visible={isImageGalleryVisible}
              onRequestClose={closeImageGallery}
          >
            <ImageGallery onClose = {closeImageGallery}/>

          </Modal>
    </View>
  );
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