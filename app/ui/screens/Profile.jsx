import { Text, StyleSheet, View, Image } from "react-native"
import { colors } from "../styles/RootColors"
import LogOut from "../components/profile/LogOut"
import DeleteAccount from "../components/profile/DeleteAccount"



const Profile = () => {
  return (

    <View style={styles.container}>
      <View style = {styles.imageContainer}>
        <Image style={styles.image} source={{ uri: 'https://blog.gleeden.com/es/wp-content/uploads/2013/12/shutterstock_61191451.jpg' }} />
      </View>
      <Text style = {styles.usernameText}>Tu nombre de usuario</Text>
      <Text style = {styles.namesUser}>Nombre Apellido</Text>
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
  usernameText: {
    fontSize: 35,
    marginTop: 20,
    fontFamily: "Roboto",
    color: `${colors.white}`
  },
  namesUser: {
    fontSize: 25,
    fontFamily: "Roboto",
    marginTop: 15,
    color: `${colors.white}`
  },

  imageContainer: {
    marginTop: '20%',
    width: 230,
    height: 230,
    borderRadius: 999,
    overflow: 'hidden'
  }, 
    image: {
      borderColor: colors.pink,
      borderWidth: 5,
      borderRadius: 999,
      flex: 1
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'center',
      alignItems: 'center',
    }
})

export default Profile