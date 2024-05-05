import React, { useEffect } from 'react';
import {
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Button from './app/ui/components/Button';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './app/navigation/RootNavigator';

function App(): React.JSX.Element {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <RootNavigator />
  );
}

export default App;
