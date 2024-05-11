import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "./TabBar";
import LogIn from "../ui/screens/LogIn";

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="LogIn"
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen 
                name="LogIn"
                component={LogIn}
            />
            <Stack.Screen 
                name="TabBar"
                component={TabBar}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator