import { Text, StyleSheet, View, Image, Dimensions } from "react-native"
import { colors } from "../styles/RootColors"
import LogOut from "../components/profile/LogOut"
import DeleteAccount from "../components/profile/DeleteAccount"
import EditField from "../components/profile/EditField"

const Profile = () => {

    return (
        <View style={styles.container}>
          <View style = {styles.imageContainer}>
            <Image style={styles.image} source={{ uri: 'https://blog.gleeden.com/es/wp-content/uploads/2013/12/shutterstock_61191451.jpg' }} /> 
          </View>
          <View style = {styles.infoBox1} >
            <Text style = {styles.usernameText} numberOfLines={1}>Tu nombre de usuario</Text>
            <EditField iconName={'edit'} size = {Dimensions.get('window').height * 0.03}/>
          </View>
          <View style = {styles.infoBox2}>
            <Text style = {styles.namesText} numberOfLines={1}>Nombre Apellido</Text>
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
        height: '100%',
      },

      namesText: {
        fontSize: 20,
        fontFamily: "Roboto",
        paddingHorizontal: '5%',
        color: `${colors.white}`
      },

      imageContainer: {
        marginTop: '20%',
        width: '55%',
        aspectRatio: 1,
        borderRadius: 999,
        overflow: 'hidden',
      }, 
        image: {
          borderColor: colors.pink,
          borderWidth: 5,
          borderRadius: 999,
          flex: 1
        },
        editImage: {
          height: '200%',


        },
        buttonContainer: {
          flex: 1,
          flexDirection: 'center',
          alignItems: 'center',
          width: '100%',
        }
})

export default Profile