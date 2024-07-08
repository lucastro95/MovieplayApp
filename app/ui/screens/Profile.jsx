import { Text, StyleSheet, View, Dimensions } from "react-native"
import { colors } from "../styles/RootColors"
import LogOut from "../components/profile/LogOut"
import DeleteAccount from "../components/profile/DeleteAccount"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import EditPopup from "../components/profile/EditPopup"
import { editName, editNickName } from "../../redux/slices/UserSlice"
import EditField from "../components/profile/EditField"
import usersWS from "../../networking/api/endpoints/usersWS"
import UserPhoto from "../components/profile/UserPhoto"
import ErrorModal from "../components/common/ErrorModal"

const Profile = () => {

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [fieldToEdit, setFieldToEdit] = useState(null);
  const [pendingUpdate, setPendingUpdate] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [noConnection, setNoConnection] = useState(false);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleEditField = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleCloseErrorModal = () => {
    setErrorVisible(false);
    setNoConnection(false);
  };

  const updateUser = async () => {
    try {
      const response = await usersWS.editUser(user);
      setPendingUpdate(false);
    } catch (error) {
      console.log(error);
      setErrorVisible(true);
      if (error.message.includes("Network Error")) {
        setNoConnection(true);
      } else {
        setNoConnection(false);
      }
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
      <ErrorModal
        visible={errorVisible}
        noconnection={noConnection}
        onClose={handleCloseErrorModal}
      />
      <UserPhoto user={user} setPendingUpdate={setPendingUpdate} />
      <View style={styles.infoBox1}>
        <Text style={styles.usernameText} numberOfLines={1}>{user.nickName}</Text>
        <EditField iconName={'edit'} size={25} handleEditField={handleEditField} name="nickname" setFieldToEdit={setFieldToEdit} />
      </View>
      <View style={styles.infoBox2}>
        <Text style={styles.namesText} numberOfLines={1}>{user.givenName} {user.familyName} </Text>
        <EditField iconName={'edit'} size={25} handleEditField={handleEditField} name="name" setFieldToEdit={setFieldToEdit} />
      </View>
      <View style={styles.buttonContainer}>
        <LogOut />
        <DeleteAccount />
      </View>
      <EditPopup
        visible={isPopupVisible}
        onClose={handleClosePopup}
        onSave={handleSave}
        fieldToEdit={fieldToEdit}
        user={user}
      />
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

  buttonContainer: {
    marginTop: '5%',
    flex: 1,
    flexDirection: 'center',
    alignItems: 'center',
    width: '100%',
  }
})

export default Profile