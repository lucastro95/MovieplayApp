import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../ui/screens/Home"

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
      </Stack.Navigator>
    </>
  )
}

export default LandingStackNavigator