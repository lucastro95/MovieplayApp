import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "./TabBar";
import LogIn from "../ui/screens/LogIn";
import Routes from "./Routes";

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName={Routes.LoginStack}
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen 
                name={Routes.LoginStack}
                component={LogIn}
            />
            <Stack.Screen 
                name={Routes.TabBarStack}
                component={TabBar}
            />

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator