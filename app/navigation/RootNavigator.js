import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "./TabBar";

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="TabBar"
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen 
                name="TabBar"
                component={TabBar}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator