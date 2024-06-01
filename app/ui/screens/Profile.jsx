import { Text, StyleSheet, View, Image, Dimensions } from "react-native"
import { colors } from "../styles/RootColors"
import LogOut from "../components/profile/LogOut"
import DeleteAccount from "../components/profile/DeleteAccount"
import EditField from "../components/profile/EditField"
import { useSelector } from "react-redux"

const Profile = () => {

  const user = useSelector((state) => state.user)

    return (
        <View style={styles.container}>
          <View style = {styles.imageSpace}>
            <View style = {styles.imageContainer}>
              <Image style={styles.image} source={{ uri: `${user.photo}` }} /> 
            </View>
            <EditField iconName={'plus-circle'} size = {30}/>
          </View>
          <View style = {styles.infoBox1} >
            <Text style = {styles.usernameText} numberOfLines={1}>Tu nombre de usuario</Text>
            <EditField iconName={'edit'} size = {Dimensions.get('window').height * 0.03}/>
          </View>
          <View style = {styles.infoBox2}>
            <Text style = {styles.namesText} numberOfLines={1}>{user.givenName} {user.familyName}</Text>
            <EditField iconName={'edit'} size = {Dimensions.get('window').height * 0.03}/>
          </View>
          <View style = {styles.buttonContainer}>
            <LogOut/>
            <DeleteAccount/>
          </View>
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
        width: '100%',
        height: Dimensions.get('window').height * 0.06,
        flexDirection: 'row',
        
      },
      infoBox2: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
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
      imageSpace: {
        marginTop: '20%',
        width: '55%',
        aspectRatio: 1,
      },

      imageContainer: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 999,
      }, 

        image: {
          borderColor: colors.pink,
          borderWidth: 5,
          borderRadius: 999,
          flex: 1
        },

        editImageButton: {
          marginBottom: 0,
          marginRight: 0
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