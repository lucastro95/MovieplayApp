import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingStackNavigator from "./LandingStackNavigator";

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="LandingStackNavigator"
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen 
                name="LandingStackNavigator"
                component={LandingStackNavigator}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator