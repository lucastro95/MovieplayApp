import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "./TabBar";
import LogIn from "../ui/screens/LogIn";
import Routes from "./Routes";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import loginWS from "../networking/api/endpoints/loginWS";
import { logIn } from "../redux/slices/UserSlice";
import React, { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    const dispatch = useDispatch();
    const [isTokenChecked, setIsTokenChecked] = useState(false);
    const [initialRoute, setInitialRoute] = useState(Routes.LoginStack);

    const getToken = async () => {
        try {
            const userToken = await AsyncStorage.getItem('userToken');
            if (userToken !== null) {
                const response = await loginWS.postToken(userToken);
                const token = response.token;
                const { name: givenName, lastname: familyName, email, photo, id } = response.user;
                console.log(givenName, familyName, email, photo, token);
                dispatch(logIn({givenName, familyName, email, photo, token, id}));
                await AsyncStorage.setItem('userToken', token)
                setInitialRoute(Routes.TabBarStack);
            }
        } catch (error) {
            console.log('Error in getToken:', error);
        }
    };

    useEffect(() => {
        getToken();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={initialRoute}
                screenOptions={{ headerShown: false }}
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
    );
};

export default RootNavigator;
