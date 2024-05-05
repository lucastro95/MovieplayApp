import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../ui/screens/Home"
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import { colors } from "../ui/styles/RootColors";
import Search from "../ui/screens/Search";
import Favourites from "../ui/screens/Favourites";
import Profile from "../ui/screens/Profile";

const Tab = createBottomTabNavigator()

const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.blue, height: 70 },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <IconMC name="home" color={focused ? colors.pink : colors.white} size={50} />
          )
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={Search}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <IconI name="search" color={focused ? colors.pink : colors.white} size={50} />
          )
        }}
      />
      <Tab.Screen
        name="FavouritesScreen"
        component={Favourites}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <IconMC name="bookmark" color={focused ? colors.pink : colors.white} size={50} />
          )
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
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