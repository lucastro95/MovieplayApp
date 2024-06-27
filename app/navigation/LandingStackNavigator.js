import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../ui/screens/Home"
import Movie from "../ui/screens/Movie"

const Stack = createNativeStackNavigator()

const LandingStackNavigator = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="HomeScreen"
          component={Home}
        />
        <Stack.Screen 
          name="MovieScreen"
          component={Movie}
        />
      </Stack.Navigator>
    </>
  )
}

export default LandingStackNavigator