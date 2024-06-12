import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './app/navigation/RootNavigator';
import {Provider} from 'react-redux'
import store from './app/redux/Store';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App(): React.JSX.Element {

  const getToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken')
    console.log(userToken);
  }

  useEffect(() => {
    getToken()
    SplashScreen.hide();
  }, [])

  return (
     <Provider store={store}>
        <RootNavigator />
     </Provider>
  );
}

export default App;
