import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Movie from "../ui/screens/Movie"
import Favourites from "../ui/screens/Favourites"

const Stack = createNativeStackNavigator()

const FavouriteStackNavigator = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="FavouriteScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="FavouriteScreen"
          component={Favourites}
        />
        <Stack.Screen 
          name="MovieScreen"
          component={Movie}
        />
      </Stack.Navigator>
    </>
  )
}

export default FavouriteStackNavigator