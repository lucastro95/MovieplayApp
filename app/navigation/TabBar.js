import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import { colors } from "../ui/styles/RootColors";
import Search from "../ui/screens/Search";
import Favourites from "../ui/screens/Favourites";
import Profile from "../ui/screens/Profile";
import LandingStackNavigator from "./LandingStackNavigator";
import Routes from "./Routes";
import SearchStackNavigator from "./SearchStackNavigator";
import FavouriteStackNavigator from "./FavouriteStackNavigator";

const Tab = createBottomTabNavigator()

const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.LandingStackNavigator}
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.blue, height: 70 },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={Routes.LandingStackNavigator}
        component={LandingStackNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <IconMC name="home" color={focused ? colors.pink : colors.white} size={50} />
          )
        }}
      />
      <Tab.Screen
        name={Routes.SearchStackNavigator}
        component={SearchStackNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <IconI name="search" color={focused ? colors.pink : colors.white} size={50} />
          )
        }}
      />
      <Tab.Screen
        name={Routes.FavouriteStackNavigator}
        component={FavouriteStackNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <IconMC name="bookmark" color={focused ? colors.pink : colors.white} size={50} />
          )
        }}
      />
      <Tab.Screen
        name={Routes.ProfileScreen}
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <IconFA name="user-alt" color={focused ? colors.pink : colors.white} size={40} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default TabBar