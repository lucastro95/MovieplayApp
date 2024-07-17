import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Movie from "../ui/screens/Movie"
import Search from "../ui/screens/Search"

const Stack = createNativeStackNavigator()

const SearchStackNavigator = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="SearchScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="SearchScreen"
          component={Search}
        />
        <Stack.Screen 
          name="MovieScreen"
          component={Movie}
        />
      </Stack.Navigator>
    </>
  )
}

export default SearchStackNavigator